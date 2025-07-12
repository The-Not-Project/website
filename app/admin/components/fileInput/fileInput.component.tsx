import {
  FileInput,
  FileInputLabel,
} from "@/app/admin/components/shared/Form";
import { useEffect, useState } from "react";
import {
  FaPlus as IconAdd,
} from "react-icons/fa6";

export default function FileInputContainer({ id, onFileUpload, url }: { id: string, onFileUpload: (file: File) => void, url?: string }) {
  const [URL, setURL] = useState<string | ArrayBuffer | null>(null);

  useEffect(() => {
    if (url) {
      setURL(url);
    }
  }, [url]);

  const addThumbnailAction = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setURL(reader.result);
      };
      reader.readAsDataURL(file);
      onFileUpload(file);
    }
  };

  const addAdditionalFilesAction = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileUpload(file);
    } else {
      console.error("No file selected");
    }
  };

  return (
    <>
      <FileInputLabel htmlFor={id}>
        {URL && id === "thumbnail" ? (
          <div className="file-preview">
            <img src={URL as string} alt="Preview" />
          </div>
        ) : (
          <div className="file-placeholder">
            <IconAdd className="icon" />
          </div>
        )}
        <FileInput
          id={id}
          type="file"
          name="files"
          accept="image/*"
          onChange={id === "thumbnail" ? addThumbnailAction : addAdditionalFilesAction}
        />
      </FileInputLabel>
    </>
  );
}
