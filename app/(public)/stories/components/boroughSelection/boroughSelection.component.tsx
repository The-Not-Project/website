import Link from "next/link";
import {
  BoroughSelectionContainer,
  CloseIcon,
} from "./boroughSelection.styles";
import { BoroughSummaries } from "@/app/constants/boroughs";
import { useStore } from "@/app/zustand/store";
import { useEffect, useState } from "react";

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
    if (showBoroughs) {
      setIsVisible(true); 
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 300); 
      return () => clearTimeout(timeout);
    }
  }, [showBoroughs]);

  return !isMobile || (isMobile && isVisible) ? (
    <BoroughSelectionContainer className={!showBoroughs ? "invisible" : undefined}>
      <ul className={!showBoroughs ? "invisible" : ""}>
        {Object.entries(BoroughSummaries).map(([key, value]) => (
          <li
            key={key}
            className={borough === value.boroughName ? "active" : ""}
          >
            <Link href={`/stories/${value.fileName}`}>{value.boroughName}</Link>
          </li>
        ))}
      </ul>
      {isMobile && <CloseIcon onClick={() => setShowBoroughs(false)} />}
    </BoroughSelectionContainer>
  ) : null;
}
