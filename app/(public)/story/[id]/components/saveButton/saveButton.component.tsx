"use client";

import { useState } from "react";
import {
  LuBookmarkPlus,
  LuBookmarkMinus,
  LuBookmarkCheck,
} from "react-icons/lu";
import { SaveButton } from "./saveButton.styles";
import clsx from "clsx";
import {
  createStorySaveAction,
  deleteStorySaveAction,
} from "@/lib/core-api/actions/story.actions";

export default function SaveButtonClient({
  storyId,
  initialSaved,
  userId,
}: {
  storyId: string;
  initialSaved: boolean;
  userId?: string;
}) {
  const [isSaved, setIsSaved] = useState(initialSaved);
  const [clicked, setClicked] = useState(false);

  const handleSave = async () => {
    if (!userId) {
      alert("You need to be logged in to save a story.");
      return;
    }

    const newStatus = !isSaved;
    setIsSaved(newStatus);

    if (newStatus) {
      setClicked(true);
      setTimeout(() => setClicked(false), 2000);
      await createStorySaveAction(storyId, userId);
    } else {
      await deleteStorySaveAction(storyId, userId);
    }
  };

  return (
    <SaveButton
      className={clsx("save-button", { saved: isSaved })}
      onClick={handleSave}
    >
      <span className={clsx({ visible: clicked })}>Saved</span>
      {clicked && isSaved ? (
        <LuBookmarkCheck size={22}/>
      ) : isSaved ? (
        <LuBookmarkMinus color="#A44A3F" size={22}/>
      ) : (
        <LuBookmarkPlus color="#3A4D39" size={22} />
      )}
    </SaveButton>
  );
}
