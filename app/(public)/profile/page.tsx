"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import PersonalInformation from "./personal-info/personalInfo.component";
import SavedStories from "./saved-stories/savedStories.component";
import { Wrapper } from "./styles";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Page() {
  const { user } = useUser();

  useEffect(() => {
    if (!user || !user.sub) {
        redirect('/')
    };
  });

  return (
    <Wrapper>
      <PersonalInformation userId={user!.sub!} />
      <SavedStories userId={user!.sub!} />
    </Wrapper>
  );
}
