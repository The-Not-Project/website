import styled from 'styled-components';

export const StoryContainer = styled.li`
  display: flex;
  gap: 20px;
`;

export const StoryImageContainer = styled.img`
  height: 100px;
  width: 150px;
  object-fit: cover;
  border-radius: 5px;
`;

export const StoryContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;
