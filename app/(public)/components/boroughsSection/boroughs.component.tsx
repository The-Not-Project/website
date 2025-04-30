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
import MapSVG from "./MapSVG";
import CompactMap from "./MapSGVCompact";

const formatBoroughName = (slug: string) =>
  {
    if (slug == "bronx") return "The Bronx";
    else if (slug == "statenisland") return "Staten Island";
    else return slug
  };

export default function Boroughs() {
  const isMobile = useStore((state) => state.mobileLayout.isMobile);
  const [fileName, setFileName] = useState<string>("nyc");
  const [visibleName, setVisibleName] = useState<string>("nyc");
  const [activeBorough, setActiveBorough] = useState<string | undefined>();
  const [shrinkingBorough, setShrinkingBorough] = useState<string | undefined>();
  const router = useRouter();

  useEffect(() => {
    const defaultBorough = isMobile ? undefined : "queens";
    setActiveBorough(defaultBorough);
    setFileName(defaultBorough ?? "nyc");
    setVisibleName(formatBoroughName(defaultBorough ?? "nyc"));
  }, [isMobile]);


  const handleClick = (borough: string) => {
    if (window.innerWidth <= 600) {
      if (borough === activeBorough) {
        setShrinkingBorough(borough);
        setActiveBorough(undefined);
        setFileName("nyc");
        setVisibleName("nyc")
        setTimeout(() => {
          setShrinkingBorough(undefined);
        }, 2); 
      } else {
        setActiveBorough(borough);
        setFileName(borough);
        setVisibleName(formatBoroughName(borough))
      }
    } else {
      router.push(`/stories/${borough}`);
    }
  };

  const handleMouseEnter = (borough: string) => {
    if (borough === activeBorough) return;

    setActiveBorough(borough);
    setTimeout(() => setFileName(borough), 100);
    setTimeout(() => setVisibleName((formatBoroughName(borough))), 250);
  };

  return (
    <BoroughsSectionContainer key={activeBorough}>
      <Background $fileName={fileName}>
        <div className="background-image" />
      </Background>

      {isMobile ? (
        !!activeBorough && (
          <BoroughPopup>
            <h2>{visibleName}</h2>
            <Link href={`stories/${activeBorough}`}>See stories</Link>
          </BoroughPopup>
        )
      ) : (
        <div className="description">
          <h2>{visibleName}</h2>
        </div>
      )}

      <SVGContainer>
        {isMobile ? (
          <CompactMap
            activeBorough={activeBorough}
            onClickAction={handleClick}
            shrinkingBorough={shrinkingBorough}
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
