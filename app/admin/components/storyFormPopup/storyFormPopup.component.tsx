"use client";

import { useState, FormEvent, useEffect } from "react";
import { Category, Story } from "@/app/types/types";
import Popup from "../popup/popup.component";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import {
  FormInput,
  FormLabel,
  FormTextArea,
  FormSelect,
  // ImagePreview,
  // AdditionalFilesContainer,
  EditorContainer,
} from "../shared/Form";
import { CloseButton } from "../shared/Button";
import FileInputContainer from "@/app/admin/components/fileInput/fileInput.component";
import CategoriesSearch from "../categoriesSearch/categoriesSearch.component";
import { SectionTitle } from "../shared/Section";
import { CreateStoryButton } from "../categoriesSearch/categoriesSearch.styles";

interface StoryFormPopupProps {
  isOpen: boolean;
  isEditing: boolean;
  story: Story | null;
  storyId: string;
  selectedCategories: Category[];
  onCloseAction: (isSaved: boolean) => void;
  onSubmitSuccessAction: () => void;
  onCategoriesChangeAction: (categories: Category[]) => void;
  createStoryAction: (formData: FormData) => Promise<void>;
  editStoryAction: (id: string, formData: FormData) => Promise<void>;
}

type UploadedMediaFile = {
  id: string;
  content: File;
};

type ExistingMedia = {
  id: string;
  url: string;
  isThumbnail: boolean;
};

export default function StoryFormPopup({
  isOpen,
  isEditing,
  story,
  storyId,
  selectedCategories,
  onCloseAction,
  onSubmitSuccessAction,
  onCategoriesChangeAction,
  createStoryAction,
  editStoryAction,
}: StoryFormPopupProps) {
  const [submitting, setSubmitting] = useState(false);
  const [thumbnail, setThumbnail] = useState<UploadedMediaFile | null>(null);
  // const [additionalFiles, setAdditionalFiles] = useState<UploadedMediaFile[]>([]);
  const [editorContent, setEditorContent] = useState(story?.content || '');
  const [existingMedia, setExistingMedia] = useState<ExistingMedia[]>([]);
  const [removedMediaIds, setRemovedMediaIds] = useState<string[]>([]);

  useEffect(() => {
    if (story) {
      setExistingMedia(
        story.media.map((media) => ({
          id: media.id,
          url: media.url,
          isThumbnail: media.isThumbnail,
        }))
      );
    }
  }, [story]);

  const handleRemoveExisting = (id: string) => {
    setRemovedMediaIds((ids) => [...ids, id]);
    setExistingMedia((list) => list.filter((m) => m.id !== id));
  };

  const handleAddThumbnail = (file: File) => {
    setThumbnail({ id: crypto.randomUUID(), content: file });

    handleRemoveExisting(
      existingMedia.find((media) => media.isThumbnail)?.id || ""
    );
    setExistingMedia((prev) =>
      prev.map((media) =>
        media.isThumbnail ? { ...media, isThumbnail: false } : media
      )
    );
  };

  // const handleAddMedia = (file: File) => {
  //   setAdditionalFiles((prev) => [
  //     ...prev,
  //     { id: crypto.randomUUID(), content: file },
  //   ]);
  // };

  // const handleRemoveMedia = (id: string) => {
  //   setAdditionalFiles((prev) => prev.filter((file) => file.id !== id));
  // };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    const formData = new FormData(event.currentTarget);

    formData.append("content", editorContent);

    selectedCategories.forEach((category) => {
      formData.append("categories", category.id);
    });

    if (thumbnail) {
      formData.append("thumbnail", thumbnail.content);
    }
    
    // additionalFiles.forEach((file) => {
    //   formData.append("additionalFiles", file.content);
    // });

    if (story) {
      formData.append("deletedMediaIds", JSON.stringify(removedMediaIds));
    } else {
      formData.append("id", storyId);
    }

    try {
      if (isEditing && story) {
        await editStoryAction(story.id, formData);
      } else {
        await createStoryAction(formData);
      }
      onSubmitSuccessAction();
    } catch (error) {
      console.error(error);
      alert(
        `There was an error ${isEditing ? "updating" : "creating"} the story.`
      );
    } finally {
      setSubmitting(false);
    }
  };

  function capitalizeWords(str: string) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  if (!isOpen) return null;

  return (
    <Popup>
      <CloseButton onClick={() => onCloseAction(false)} />
      <SectionTitle>
        {isEditing ? "Edit Story" : "Create New Story"}
      </SectionTitle>

      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="title">Title</FormLabel>
        <FormInput name="title" required defaultValue={story?.title || ""} />

        <FormLabel htmlFor="content">Content</FormLabel>
        {/* <FormTextArea
          name="content"
          required
          defaultValue={story?.content || ""}
        /> */}
        <EditorContainer>
          <SimpleEditor value={editorContent} onChange={setEditorContent} storyId={storyId} />
        </EditorContainer>
        <FormLabel htmlFor="summary">Summary</FormLabel>
        <FormTextArea
          height="100"
          name="summary"
          required
          defaultValue={story?.summary || ""}
        />

        <FormLabel htmlFor="borough">Borough</FormLabel>
        <FormSelect
          name="borough"
          required
          defaultValue={story?.borough || "new york"}
        >
          {[
            "new york",
            "brooklyn",
            "manhattan",
            "bronx",
            "queens",
            "staten island",
          ].map((borough) => (
            <option key={borough} value={borough}>
              {capitalizeWords(borough)}
            </option>
          ))}
        </FormSelect>

        <FormLabel>Categories</FormLabel>
        <CategoriesSearch
          selectedCategories={selectedCategories}
          setSelectedCategories={onCategoriesChangeAction}
        />

        <FormLabel>Thumbnail</FormLabel>
        <FileInputContainer
          id="thumbnail"
          onFileUpload={handleAddThumbnail}
          url={
            existingMedia.find((media) => media.isThumbnail)?.url || undefined
          }
        />
        {/* <FormLabel>Additional Media</FormLabel>
        <AdditionalFilesContainer>
          {existingMedia
            .filter((media) => !media.isThumbnail)
            .map((media) => (
              <ImagePreview
                key={media.id}
                onClick={() =>
                  confirm("Are you sure you want to remove this media?") &&
                  handleRemoveExisting(media.id)
                }
              >
                <img src={media.url} alt={media.id} />
              </ImagePreview>
            ))}
          {additionalFiles.map((file) => (
            <ImagePreview
              key={file.id}
              onClick={() =>
                confirm("Are you sure you want to remove this media?") &&
                handleRemoveMedia(file.id)
              }
            >
              <img src={URL.createObjectURL(file.content)} alt={file.id} />
            </ImagePreview>
          ))}
          <FileInputContainer
            id="additional-files"
            onFileUpload={handleAddMedia}
          />
        </AdditionalFilesContainer> */}

        <CreateStoryButton type="submit" disabled={submitting}>
          {submitting ? "Saving..." : isEditing ? "Save" : "Create Story"}
        </CreateStoryButton>
      </form>
    </Popup>
  );
}
