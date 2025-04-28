import Link from "next/link";
import {
  BoroughSelectionContainer,
  CloseIcon,
} from "./boroughSelection.styles";
import { BoroughSummaries } from "@/app/constants/boroughs";
import { useStore } from "@/app/zustand/store";
import { useEffect, useState } from "react";
import clsx from "clsx";

type BoroughSelectionProps = {
  borough: string;
  showBoroughs: boolean;
  setShowBoroughs: (show: boolean) => void;
};

export default function BoroughSelectionComponent({
  borough,
  showBoroughs,
  setShowBoroughs,
}: BoroughSelectionProps) {
  const isMobile = useStore((state) => state.mobileLayout.isMobile);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowBoroughs(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showBoroughs) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [showBoroughs]);

  return !isMobile || (isMobile && isVisible) ? (
    <BoroughSelectionContainer
      className={!showBoroughs ? "invisible" : undefined}
    >
      <ul className={!showBoroughs ? "invisible" : ""}>
        {Object.entries(
          isMobile
            ? BoroughSummaries
            : Object.fromEntries(Object.entries(BoroughSummaries).slice(0, -1))
        ).map(([key, value]) => (
          <li
            key={key}
            className={clsx(value.fileName, {
              active: borough === value.boroughName,
            })}
          >
            <Link
              href={`/stories/${value.fileName == "nyc" ? "" : value.fileName}`}
            >
              {value.boroughName}
            </Link>
          </li>
        ))}
      </ul>
      {isMobile && <CloseIcon onClick={() => setShowBoroughs(false)} />}
    </BoroughSelectionContainer>
  ) : null;
}
