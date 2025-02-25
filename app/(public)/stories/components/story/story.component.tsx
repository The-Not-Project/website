import { Story as StoryType } from "@/app/types/types";

export default function Story({ story }: { story: StoryType }) {
    return (
        <div>
            <h1>{story.title}</h1>
        </div>
    );
}