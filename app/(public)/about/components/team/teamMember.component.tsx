import {
  TeamMemberCard,
  ProfileImage,
  ProfileImageContainer,
} from "./team.styles";

type TeamMemberProps = {
  name: string;
  role: string;
  imageSrc: string;
};

export default function TeamMember({ name, role, imageSrc }: TeamMemberProps) {
  return (
    <TeamMemberCard>
      <ProfileImageContainer>
        <ProfileImage src={`/media/${imageSrc}.jpg`} alt={name} width={450} height={500} />
      </ProfileImageContainer>
      <h1>{name}</h1>
      <p>{role}</p>
    </TeamMemberCard>
  );
}
