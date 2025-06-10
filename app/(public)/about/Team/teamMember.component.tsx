import React, { useState } from "react";
import { TeamMemberCard, ProfileImage } from "./team.styles";

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
}

export default function TeamMember({ name, role, imageSrc }: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TeamMemberCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ProfileImage src={imageSrc} alt={name} isHovered={isHovered} />
      <h1>{name}</h1>
      <p>{role}</p>
    </TeamMemberCard>
  );
}
