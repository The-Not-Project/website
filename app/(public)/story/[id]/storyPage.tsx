"use client";

import clsx from "clsx";
import { Fragment, JSX, useCallback, useEffect, useState } from "react";
import { useStore } from "@/app/zustand/store";
import { Story } from "@/app/types/types";
import { usePublicServerActions } from "@/app/contexts/public-server-actions";
import { useUser } from "@auth0/nextjs-auth0/client";
import LoadingPage from "../../shared/components/loadingPage/loadingPage.component";
import { CategoriesContainer, StoryContainer, SaveButton } from "./style";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import Image from "next/image";
import { StoryReader } from "./storyReader";

export default function StoryPage({ id }: { id: string }) {
  const { getStory, createStorySave, deleteStorySave, isStorySaved } =
    usePublicServerActions();

  const [story, setStory] = useState<Story | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { user } = useUser();

  const setIsMobile = useStore((state) => state.mobileLayout.setIsMobile);
  const isMenuOpen = useStore((state) => state.mobileLayout.isMenuOpen);

  const fetchStory = useCallback(async () => {
    const story = await getStory(id);
    setStory(story);
  }, [id, getStory]);

  const handleSave = async () => {
    if (!user?.sub) {
      alert("You need to be logged in to save a story.");
      return;
    }

    if (isSaved) {
      await deleteStorySave(id, user.sub);
      setIsSaved(false);
    } else {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 2000);
      await createStorySave(id, user.sub);
      setIsSaved(true);
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 850);

    handleResize();
    window.addEventListener("resize", handleResize);

    (async () => {
      if (!user?.sub) return;
      const saved = await isStorySaved(id, user.sub);
      setIsSaved(saved);
    })();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [id, isStorySaved, setIsMobile, user?.sub]);

  useEffect(() => {
    fetchStory();
  }, [fetchStory]);

  if (!story) return <LoadingPage isLoading={true} isHome={false} />;

  const thumbnail = story.media.find((media) => media.isThumbnail)?.url;
  const author = story.author.firstName + " " + story.author.lastName;
  const date = new Date(story.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const additionalMedia = story.media.filter((media) => !media.isThumbnail);
  const contentParts = story.content.split("[photo]");
  const contentElements: JSX.Element[] = [];
  contentParts.forEach((part, index) => {
    if (part.trim()) {
      contentElements.push(<p key={`text-${index}`}>{part}</p>);
    }
    if (index < contentParts.length - 1 && additionalMedia[index]) {
      contentElements.push(
        <Image
          key={`media-${index}`}
          src={additionalMedia[index].url}
          alt="additional media"
          width={600}
          height={400}
        />
      );
    }
  });

  return (
    <StoryContainer className={clsx("page-wrapper", { shifted: isMenuOpen })}>
      {story.categories.length > 0 && (
        <CategoriesContainer>
          <SaveButton
            className={clsx("save-button", { saved: isSaved })}
            onClick={handleSave}
          >
            <span className={clsx({ visible: clicked })}>Saved!</span>
            {isSaved ? <FaBookmark /> : <FaRegBookmark />}
          </SaveButton>
          {story.categories.map((category, index) => (
            <Fragment key={category.id}>
              <span>{category.name}</span>
              {index < story.categories.length - 1 && (
                <span className="divider">|</span>
              )}
            </Fragment>
          ))}
        </CategoriesContainer>
      )}
      <h1 className="title">{story.title}</h1>
      {/* <p className="summary">{story.summary}</p> */}
      <img src={thumbnail || ""} alt="thumbnail" />
      <hr />
      <div className="info">
        <p>By {author}</p>
        <p>{date}</p>
      </div>
      <div className="prose">
        <StoryReader value={story.content} />
      </div>
    </StoryContainer>
  );
}
