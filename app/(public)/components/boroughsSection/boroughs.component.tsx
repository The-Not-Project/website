"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/app/zustand/store";
import {
  BoroughsSectionContainer,
  SVGContainer,
  Background,
  BoroughPopup,
} from "./boroughs.styles";
import MapSVG from "./MapSVG";
import CompactMap from "./MapSGVCompact";
import { IoChevronForwardSharp } from "react-icons/io5";

const formatBoroughName = (slug: string) => {
  switch (slug) {
    case "bronx":
      return "The Bronx";
    case "statenisland":
      return "Staten Island";
    default:
      return slug;
  }
};

export default function Boroughs() {
  const isMobile = useStore((state) => state.mobileLayout.isMobile);
  const [fileName, setFileName] = useState<string>("nyc");
  const [visibleName, setVisibleName] = useState<string>("nyc");
  const [activeBorough, setActiveBorough] = useState<string | undefined>();
  const [shrinkingBorough, setShrinkingBorough] = useState<
    string | undefined
  >();
  const router = useRouter();

  useEffect(() => {
    const boroughs = [
      "manhattan",
      "bronx",
      "brooklyn",
      "queens",
      "statenisland",
    ];

    const images = boroughs.map((name) => {
      const img = new Image();
      img.src = `/media/boroughBackdrops/${name}.jpg`;
      return img;
    });

    return () => {
      images.forEach((img) => {
        img.src = "";
      });
    };
  }, []);

  useEffect(() => {
    const defaultBorough = isMobile ? undefined : "queens";
    setActiveBorough(defaultBorough);
    setFileName(defaultBorough ?? "nyc");
    setVisibleName(formatBoroughName(defaultBorough ?? "nyc"));
  }, [isMobile]);

  const handleClick = (borough: string) => {
    if (window.innerWidth <= 600) {
      if (borough === activeBorough) {
        setShrinkingBorough(borough); // Added this line
        setActiveBorough(undefined);
        setFileName('nyc');
        setTimeout(() => {  // And these 3 lines
          setShrinkingBorough(undefined);
        }, 2);
      } else {
        setActiveBorough(borough);
        setFileName(borough);
        setVisibleName(formatBoroughName(borough));
      }
    } else {
      router.push(`/stories/${borough}`);
    }
  };

  const handleMouseEnter = (borough: string) => {
    if (borough === activeBorough) return;

    setActiveBorough(borough);
    setTimeout(() => setFileName(borough), 100);
    setTimeout(() => setVisibleName(formatBoroughName(borough)), 250);
  };

  return (
    <BoroughsSectionContainer key={activeBorough} $fileName={fileName}>
      <Background>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/media/boroughBackdrops/${fileName}.jpg`} alt={fileName}/>
      </Background>

      {isMobile ? (
        <>
          {fileName != 'nyc' ? (
            <BoroughPopup onClick={() => handleClick(activeBorough ?? '')}>
               <h2 onClick={() => router.push(`stories/${activeBorough}`)}>{visibleName} <IoChevronForwardSharp className="icon" /></h2>
              {/* <Link href={`stories/${activeBorough}`}>See stories</Link> */}
              {/* <button onClick={() => handleClick(activeBorough ?? '')}>collapse</button> */}
            </BoroughPopup>
          ) : (
            <h1>The Five Boroughs</h1>
          )}
        </>
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
