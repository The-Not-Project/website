import { Story as StoryType } from "@/app/types/types";
import Story from "../story/story.component";

export default function StoriesList({stories}: {stories: StoryType[]}) {
    return (
        <div>
            {stories.map((story) => (
                <Story key={story.id} story={story} />
            ))}
        </div>
    );


}