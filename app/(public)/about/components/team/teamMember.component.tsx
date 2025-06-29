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
        <ProfileImage src={`/media/${imageSrc}.jpg`} alt={name}/>
      </ProfileImageContainer>
      <h2>{name}</h2>
      <p>{role}</p>
    </TeamMemberCard>
  );
}
