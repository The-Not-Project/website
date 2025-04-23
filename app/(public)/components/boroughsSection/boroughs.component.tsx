"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/app/zustand/store";
import {
  BoroughsSectionContainer,
  SVGContainer,
  Background,
  BoroughPopup,
  Link,
} from "./boroughs.styles";
import { BoroughSummaries as summaries } from "@/app/constants/boroughs";
import MapSVG from "./MapSVG";
import CompactMap from "./MapSGVCompact";

export default function Boroughs() {
  const isMobile = useStore((state) => state.mobileLayout.isMobile);
  const [summary, setSummary] = useState(summaries.queens);
  const [fileName, setFileName] = useState<string>('nyc');
  const [activeBorough, setActiveBorough] = useState<string | undefined>();

  const router = useRouter();

  useEffect(() => {
    setActiveBorough(isMobile ? undefined : "queens");
    setFileName(isMobile ? "nyc" : "queens");
  }, [isMobile]);

  useEffect(() => {
    Object.keys(summaries).forEach((borough) => {
      const img = new Image();
      img.src = `/media/boroughBackdrops/${borough}.jpg`;
    });
  }, []);

  const handleClick = (borough: string) => {
    if (window.innerWidth <= 600) {
      if (borough === activeBorough) {
        setActiveBorough(undefined);
        setFileName("nyc");
      } else {
        setActiveBorough(borough);
        setFileName(borough);
        setSummary(summaries[borough as keyof typeof summaries]);
      }
    } else {
      router.push(`/stories/${borough}`);
    }
  };

  const handleMouseEnter = (borough: string) => {
    if (borough === activeBorough) return;

    setActiveBorough(borough);

    setTimeout(() => {
      setFileName(borough);
    }, 100);

    setTimeout(() => {
      setSummary(summaries[borough as keyof typeof summaries]);
    }, 333);
  };

  return (
    <BoroughsSectionContainer key={activeBorough}>
      <Background $fileName={fileName}>
        <div className="background-image" />
      </Background>
      {isMobile ? (
        !!activeBorough && (
          <BoroughPopup>
            <h2>{summary.boroughName}</h2>
            <Link href={`stories/${activeBorough}`}>See stories</Link>
          </BoroughPopup>
        )
      ) : (
        <>
          {/* <h1>The Five</h1> */}
          <div className="description">
            <h2>{summary.boroughName}</h2>
            {/* <p>{summary.description}</p> */}
          </div>
        </>
      )}

      <SVGContainer>
        {isMobile ? (
          <CompactMap
            activeBorough={activeBorough}
            onClickAction={handleClick}
          />
        ) : (
          <MapSVG
            activeBorough={activeBorough}
            onMouseEnterAction={handleMouseEnter}
            onClickAction={handleClick}
          />
        )}
      </SVGContainer>
    </BoroughsSectionContainer>
  );
}
