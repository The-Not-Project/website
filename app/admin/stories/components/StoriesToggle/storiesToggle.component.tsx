import Link from "next/link";
import { ToggleContainer } from "./storiesToggle.styles";
import { LuEye as VisibleIcon, LuEyeClosed as HiddenIcon } from "react-icons/lu";

export default function StoriesToggle({ showHidden }: { showHidden: boolean }) {
  return (
    <ToggleContainer>
      <Link href={`/admin/stories${showHidden ? "" : "?hidden=true"}`}>
              {showHidden ? "Pubished" : "Hidden"}

        {showHidden ? <VisibleIcon /> : <HiddenIcon />}
      </Link>
    </ToggleContainer>
  );
}
