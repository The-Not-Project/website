import {
  BoroughDescription,
  HeaderContainer,
  MenuButton,
} from "./header.styles";
import BoroughSelection from "../boroughSelection/boroughSelection.component";
import { useStore } from "@/app/zustand/store";
import { useState } from "react";

type HeaderProps = {
  borough: {
    fileName: string;
    boroughName: string;
    description: string;
  };
};

export default function HeaderComponent({ borough }: HeaderProps) {
  const isMobile = useStore((state) => state.mobileLayout.isMobile);

  const [showBoroughs, setShowBoroughs] = useState(false);

  return (
    <HeaderContainer $filename={borough.fileName}>
      <BoroughSelection
        borough={borough.boroughName}
        showBoroughs={showBoroughs}
        setShowBoroughs={setShowBoroughs}
      />
      <BoroughDescription>
        <span>“New York is not a city, it’s a world.”</span>
        <br /> — Iman
      </BoroughDescription>
      {isMobile && (
        <MenuButton onClick={() => setShowBoroughs(true)}>
          Read about your borough
        </MenuButton>
      )}
    </HeaderContainer>
  );
}
