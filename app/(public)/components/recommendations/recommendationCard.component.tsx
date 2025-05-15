import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useStore } from "@/app/zustand/store";
import { Story } from "@/app/types/types";
import { Image, RecommendationCardContainer } from "./recommendations.styles";

export default function RecommendationCard({
  recommendation,
}: {
  recommendation: Story;
}) {
  const isMobile = useStore((state) => state.mobileLayout.isMobile);
  const [expanded, setExpanded] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMobile || !cardRef.current) return;

    let animationFrameId: number;

    const checkIfCentered = () => {
      const rect = cardRef.current!.getBoundingClientRect();
      const viewportCenter = window.innerWidth / 2;

      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(viewportCenter - cardCenter);

      setTimeout(() => {
        setExpanded(distance < 40);
      }, 200);

      animationFrameId = requestAnimationFrame(checkIfCentered);
    };

    animationFrameId = requestAnimationFrame(checkIfCentered);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isMobile]);

  function formatDate(date: Date) {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  const formattedDate = useMemo(
    () => formatDate(recommendation.createdAt),
    [recommendation.createdAt]
  );

  return (
    <RecommendationCardContainer
      ref={cardRef}
      onMouseEnter={() => !isMobile && setExpanded(true)}
      onMouseLeave={() => !isMobile && setExpanded(false)}
    >
      <Image $src={recommendation.media[0].url} className={clsx({ expanded })}>
        <span className="date">{formattedDate}</span>
      </Image>
      <div className={clsx("content", { expanded })}>
        <p className="categories">
          {recommendation.categories.map((category, index) => (
            <span key={category.id}>
              {category.name}
              {index < recommendation.categories.length - 1 && ", "}
            </span>
          ))}
        </p>
        <h3>{recommendation.title}</h3>
        <p className={clsx("summary", { expanded })}>
          {recommendation.summary.slice(0, 200)}{" "}
          {recommendation.summary.length > 200 && "..."}
        </p>

        <Link href={`/story/${recommendation.id}`}>Read story</Link>
      </div>
    </RecommendationCardContainer>
  );
}
