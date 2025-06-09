import { Story } from "@/app/types/types";
import { CategoriesContainer, StoryContainer, StoryContent } from "./savedStories.styles";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SavedStory({ story }: { story: Story }) {

    const router = useRouter();
    
  const thumbnail = story.media.find((media) => media.isThumbnail)?.url;
  const date = new Date(story.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <StoryContainer
    onClick={() => router.push(`/story/${story.id}`)}
    >
      <StoryContent>
            <h2 className="title">
              <Link href={`/story/${story.id}`}>{story.title}</Link>
            </h2>
            <div className="info">
              <span className="createdAt">{date}</span>
              {story.categories.length > 0 && (
                <CategoriesContainer>
                  <span>・{story.categories[0].name}</span>
                </CategoriesContainer>
              )}
            </div>
            
      </StoryContent>
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img src={thumbnail} alt="thumbnail" />

    </StoryContainer>
  );
}
