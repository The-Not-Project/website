import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Story } from "@/app/types/types";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import {
  ActionButton,
  Image,
  RecommendationCardContainer,
} from "./recommendations.styles";

export default function RecommendationCard({
  recommendation,
}: {
  recommendation: Story;
}) {
  const [expanded, setExpanded] = useState(false);

  function formatDate(date: Date) {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <RecommendationCardContainer>
      <Image
        $src={recommendation.media[0].url}
        className={clsx({ expanded })}
      >
        <span className="date">{formatDate(recommendation.createdAt)}</span>
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
        <div>
          {}
          
          <ActionButton className={clsx({ expanded })}>
            <p onClick={() => setExpanded(true)}>
              <FaArrowUp />
              expand
            </p>
            <p onClick={() => setExpanded(false)}>
              <FaArrowDown />
              collapse
            </p>
          </ActionButton>
          <Link href={`/story/${recommendation.id}`}>Read story</Link>
        </div>
      </div>
    </RecommendationCardContainer>
  );
}
