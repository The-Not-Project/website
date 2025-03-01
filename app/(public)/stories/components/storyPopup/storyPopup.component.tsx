// storyPopup.tsx
import { Story } from "@/app/types/types";
import { StoryPopupContainer, Title } from "./storyPopup.styles";
import Image from "next/image";

type StoryPopupProps = {
  story: Story;
  position: number;
};

export default function StoryPopup({ story, position }: StoryPopupProps) {

    const thumbnail = story.media.find((media) => media.isThumbnail)?.url;

  return (
    <StoryPopupContainer $position={position}>
        <Image src={thumbnail || ''} width={500} height={250} alt="thumbnail" />
        <Title>{story.title}</Title>
    </StoryPopupContainer>
  );
}