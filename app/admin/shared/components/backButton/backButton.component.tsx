'use client'
import { BackButton } from './backButton.styles';
import { useRouter } from 'next/navigation';

export default function Back() {

  const router = useRouter();

  return (
    <BackButton onClick={() => router.push('/')}>
        <span className="arrow"></span> Go back
    </BackButton>
  );
};

