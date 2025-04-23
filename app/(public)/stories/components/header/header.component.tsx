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
    quote: {
      text: string;
      author: string;
    }
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
        {isMobile ? (
          <>
            <span>“{borough.quote.text}”</span>
            <br /> — {borough.quote.author}
          </>
        ) : (
          borough.description
        )}
      </BoroughDescription>
      {isMobile && (
        <MenuButton onClick={() => setShowBoroughs(true)}>
          Read about your borough
        </MenuButton>
      )}
    </HeaderContainer>
  );
}
