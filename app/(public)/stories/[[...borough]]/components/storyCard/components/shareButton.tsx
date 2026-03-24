"use client";

import { LuForward as ShareIcon } from "react-icons/lu";

export default function ShareButton({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  async function handleShare() {
    const url = `https://www.thenotproject.com/story/${id}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      alert("Link copied to clipboard!");
      navigator.clipboard.writeText(url);
    }
  }
  return (
    <span onClick={handleShare}>
      <ShareIcon size={15} /> Share
    </span>
  );
}
