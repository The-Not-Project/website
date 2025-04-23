// stories/[borough]/page.tsx
"use client";
import { useParams } from "next/navigation";
import StoriesPageComponent from "../components/StoriesPage/storiesPage.component";
import { useStore } from "@/app/zustand/store";
import { useEffect } from "react";

export default function StoriesPage() {
  const { borough } = useParams() as { borough: string };

  const setIsMobile = useStore((state) => state.mobileLayout.setIsMobile);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <StoriesPageComponent boroughParam={borough} />;
}
