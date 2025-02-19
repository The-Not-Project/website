'use client'
import { BackButton } from './backButton.styles';

const Back = () => {
  const handleGoBack = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/';
  };
  return (
    <BackButton onClick={handleGoBack}>
        <span className="arrow"></span> Go back
    </BackButton>
  );
};

export default Back;