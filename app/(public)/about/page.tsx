"use client";

import { useEffect } from "react";
import {
  HeaderContainer,
  HeaderImage,
  HeaderBackground,
  AboutContainer,
  WhatWeDoContainer,
  WhatWeDoImage,
  WhatWeDoContent,
  WhatWeDoDifferentContainer,
  WhatWeDoDifferentContent,
  WhatWeDoDifferentImage,
  WhoIsItForContainer,
  VisionContainer,
  OurTeamContainer,
  DonationContainer,
  TeamMember,
  TeamMemberImage,
  TeamMemberName,
  TeamMemberRole,
} from "./styles";
import { useStore } from "@/app/zustand/store";
import clsx from "clsx";

export default function About() {
  const setIsMobile = useStore((state) => state.mobileLayout.setIsMobile);
  const isMenuOpen = useStore((state) => state.mobileLayout.isMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className={clsx("page-wrapper", { shifted: isMenuOpen })}>
      <HeaderContainer>
        <HeaderBackground>
          <HeaderImage src="/media/LorenzoInFlushing.png" alt="About Us" />
        </HeaderBackground>
      </HeaderContainer>
      <AboutContainer>
        <h1>ABOUT US</h1>
        <p>
          It all started in a classroom, when the word “journalism” hit
          differently. I chased it and asked for guidance, but was given
          silence. I spoke with conviction and was met with doubt. The doubt
          would not kill the idea, rather it lit the fire. The Not Project was
          born from rejection. Being told I will never be this or that forged me
          into a more independent thinker. I said, “You’re right. I’m not”. I
          embraced what I am not and that is exactly why I am doing this.
        </p>
      </AboutContainer>
      <WhatWeDoContainer>
        <WhatWeDoContent>
          <h1>WHAT WE DO</h1>
          <p>
            We do it all. We write, film, photograph, edit, spin records,
            organize events, support local businesses, support local artists,
            travel, listen to music, and watch movies. Anything you can put your
            mind to, we do. From grassroots journalism to underground music
            sessions, from community photo shoots to platforming unheard
            voices–we show up. You won’t just know what is happening, you will
            be shown how it feels to be part of it.
          </p>
          <p>We are a culture.</p>
        </WhatWeDoContent>
        <WhatWeDoImage src="/media/LoAndDavid.png" alt="What We Do" />
      </WhatWeDoContainer>
      <WhatWeDoDifferentContainer>
        <WhatWeDoDifferentImage
          src="/media/TareekFlic.png"
          alt="What We Do Differently"
        />
        <WhatWeDoDifferentContent>
          <h1>WHAT WE DO DIFFERENTLY</h1>
          <p>
            We’re not built for algorithms.  We’re not chasing virality or
            faking authenticity for attention. We are rooted in humanitarianism.
            We move differently–community-first, creatively-led, and completely
            independent. We believe heavily in transparency and authenticity. 
          </p>
          <p>
            The success we seek is pushing others to be the best version of
            themselves. Selflessness is the greatest currency. This isn’t a
            recycled content factory. This is a love letter to the boroughs–told
            by the people who live in them. For the people by the people.
          </p>
        </WhatWeDoDifferentContent>
      </WhatWeDoDifferentContainer>
      <WhoIsItForContainer>
        <h1>WHO IS IT FOR?</h1>
        <p>Everybody.</p>
        <p>
          It’s also for the ones who never got the mic.  The overlooked. The
          underestimated. The misunderstood. The ones with something real to
          say. 
        </p>
        <p>
          The Not Project is for anyone tired of being spoken for and is ready
          to speak for themselves.  If you’ve ever felt like you didn’t fit, you
          do here.  We see you. We hear you. We’re with you. 
        </p>
      </WhoIsItForContainer>
      {/* <VisionContainer>
        <h1>OUR VISION</h1>
        <p>
          We are a grassroots team of just 3 people and are seeking to bring in
          as many individuals as possible. 
        </p>
        <p>
          Right now, we’re rooted in NYC–but the vision goes far beyond that. We
          want to grow into schools, into global stories, into humanitarian
          outreach. 
        </p>
        <p>
          The Not Project is a platform—but more importantly, it’s a movement.
          And this is just the beginning.  Every journey begins with the first
          step. I promise you this will succeed and be world renowned, but we
          first must think local to save global. 
        </p>
      </VisionContainer>
      <OurTeamContainer>
        <h1>MEET OUR TEAM</h1>
        <p>Meet the people who make it all possible.</p>
        <TeamMember>
          <TeamMemberImage src="" alt="Lorenzo" />
          <TeamMemberName>Lorenzo</TeamMemberName>
          <TeamMemberRole>Founder</TeamMemberRole>
        </TeamMember>
      </OurTeamContainer>
      <DonationContainer>
        <h1>DONATE</h1>
      </DonationContainer> */}
    </div>
  );
}
