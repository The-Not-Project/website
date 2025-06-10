import { OurTeamContainer, TeamList, TeamBanner } from "./team.styles";
import TeamMember from "./teamMember.component";

export default function Team() {

  const teamMembers = [
    {
      name: "Lorenzo Gonzalez",
      role: "Founder",
      imageSrc: "lorenzowithShades"
    },
    {
      name: "Tariq El Ghayate",
      role: "Co Founder",
      imageSrc: "tariqElWithShades"
    },
    {
      name: "Sebastian Torres",
      role: "Co Founder",
      imageSrc: "SebastianSideProf"
    }
  ];

  return (
    <OurTeamContainer>
      <TeamBanner>
        <h1>MEET OUR TEAM</h1>
        <p>The people who make it all possible.</p>
        <TeamList>
          {teamMembers.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              role={member.role}
              imageSrc={member.imageSrc}
            />
          ))}
        </TeamList>
      </TeamBanner>
    </OurTeamContainer>
  );
}