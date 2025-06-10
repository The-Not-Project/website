"use client";
import { OurTeamContainer, TeamList, TeamBanner } from "./team.styles";
import TeamMember from "./teamMember.component";

export default function Team() {
  return (
    <OurTeamContainer>
      <TeamBanner>
        <h1>MEET OUR TEAM</h1>
        <p>The people who make it all possible.</p>
        <TeamList>
          <TeamMember
            name="Lorenzo Gonzalez"
            role="Founder"
            imageSrc="./media/lorenzowithShades.jpg"
          ></TeamMember>
          <TeamMember
            name="Tariq El Ghayate"
            role="Co Founder"
            imageSrc="./media/tariqElWithShades.jpg"
          ></TeamMember>
          <TeamMember
            name="Sebastian Torres"
            role="Co Founder"
            imageSrc="./media/SebastianSideProf.png"
          ></TeamMember>
        </TeamList>
      </TeamBanner>
    </OurTeamContainer>
  );
}
