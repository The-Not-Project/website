'use client';
import { useServerActions } from '@/app/contexts/server-actions';
import { User } from '@/app/types/types';
import { PageSection, SectionTitle } from '../components/shared/Section';
import { FormLabel, FormInput } from '../components/shared/Form';
import { Button, ButtonsContainer } from '../components/shared/Button';
import { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import LoadingPage from '../components/loadingPage/loadingPage.component';

export default function PersonalInformation() {
  const { UpdateUser, getUser } = useServerActions();
  const { user } = useUser();

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user?.sub) return;
    setIsLoading(true);
    getUser(user.sub)
      .then(dbUsed => {
        setCurrentUser(dbUsed);
      })
      .catch(error => {
        console.error('Failed to fetch user:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user?.sub]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    try {
      await UpdateUser(data, currentUser);
      setDisabled(true);
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <PageSection>
      <SectionTitle>Basic Information</SectionTitle>
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor='firstName'>First Name</FormLabel>
        <FormInput
          type='text'
          id='firstName'
          name='firstName'
          defaultValue={currentUser?.firstName}
          disabled={disabled}
          required
        />
        <FormLabel htmlFor='lastName'>Last Name</FormLabel>
        <FormInput
          type='text'
          id='lastName'
          name='lastName'
          defaultValue={currentUser?.lastName}
          disabled={disabled}
          required
        />
        <FormLabel htmlFor='email'>Email</FormLabel>
        <FormInput
          type='text'
          id='email'
          name='email'
          defaultValue={currentUser?.email}
          disabled
          required
        />
        {disabled ? (
          <Button type='button' onClick={() => setDisabled(false)}>
            Edit
          </Button>
        ) : (
          <ButtonsContainer>
            <Button
              type='button'
              className='inverted'
              onClick={() => setDisabled(true)}
            >
              Cancel
            </Button>
            <Button type='submit'>Save</Button>
          </ButtonsContainer>
        )}
      </form>
    </PageSection>
  );
}
