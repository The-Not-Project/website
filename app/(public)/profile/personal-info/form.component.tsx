"use client";

import { authClient } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import {
  setCooldownAction,
  validateCooldownAction,
} from "@/lib/auth/actions/setLinkTimeout";
import {
  ButtonsContainer,
  Disabled,
  FallbackNotice,
  FormButton,
  FormButtonOutlined,
  FormInput,
  FormLabel,
  StyledForm,
  SuccessMessage,
  VerifiedStatus,
} from "./personal-info.styles";
import { PageSection, PageSectionTitle, SectionDescription } from "../styles";
import Loader from "../../shared/components/loader/loader";
import { LuCheck as Checkmark, LuInfo as Info } from "react-icons/lu";

type FormProps = {
  user: {
    email: string;
    firstName: string;
    lastName: string;
    name: string;
    emailVerified: boolean;
  };
};

export default function PersonalInfoForm({ user }: FormProps) {
  const router = useRouter()
  const [showSuccess, setShowSuccess] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [isPending, startTransition] = useTransition();

  const defaultNames = {
    first: user.firstName ?? user.name?.split(" ")[0] ?? "",
    last: user.lastName ?? user.name?.split(" ").slice(1).join(" ") ?? "",
  };
  const [defaultUsername, setDefaultUsername] = useState(defaultNames)
  const [username, setUsername] = useState(defaultNames);
  const isUsingSplitFallback = !user.firstName || !user.lastName;

  useEffect(() => { 
    setUsername(defaultUsername)
  }, [disabled, defaultUsername])

  async function handleEmailVerification() {
    const { error: cooldownError } = await validateCooldownAction();
    if (cooldownError) {
      alert(cooldownError);
      return;
    }
    const { error } = await authClient.sendVerificationEmail({
      email: user.email,
      callbackURL: process.env.NEXT_PUBLIC_APP_BASE_URL,
    });

    if (error) {
      console.log(error);
    } else {
      await setCooldownAction();
      setShowSuccess(true);
    }
  }

  async function handleUpdate(formData: FormData) {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;

    if (!firstName || !lastName) {
      alert("First and last name required");
    }
    startTransition(async () => {
      try {
        const { error } = await authClient.updateUser({
          firstName: firstName,
          lastName: lastName,
          name: `${firstName} ${lastName}`,
        });

        if (!error) {
          setDisabled(true);
          setDefaultUsername({
            first: firstName,
            last: lastName,
          });
        }
      } catch (error) {
        console.error("Update failed:", error);
      }
    });
  }

  return (
    <div>
      <PageSectionTitle>About you</PageSectionTitle>
      <PageSection>
        <SectionDescription>
          <h2>Personal Info</h2>
          <p>Provide your Personal Info</p>
        </SectionDescription>
        <StyledForm action={handleUpdate}>
          <FormLabel htmlFor="email" className="email">
            Email
            <FormInput
              type="text"
              name="email"
              defaultValue={user.email}
              disabled
            />
            <VerifiedStatus>
              {user.emailVerified ? (
                <span>
                  <Checkmark />
                  verified
                </span>
              ) : (
                <button type="button" onClick={() => handleEmailVerification()}>
                  verify
                </button>
              )}
            </VerifiedStatus>
          </FormLabel>
          {showSuccess && (
            <SuccessMessage>
              Check your email for verification link.
            </SuccessMessage>
          )}

          <FormLabel htmlFor="firstName">
            First name
            <FormInput
              type="text"
              name="firstName"
              value={username.first}
              onChange={(e) =>
                setUsername({ ...username, first: e.target.value })
              }
              disabled={disabled}
              required
            />
            {disabled && <Disabled />}
          </FormLabel>
          <FormLabel htmlFor="lastName">
            Last name
            <FormInput
              type="text"
              name="lastName"
              value={username.last}
              onChange={(e) =>
                setUsername({ ...username, last: e.target.value })
              }
              disabled={disabled}
              required
            />
            {disabled && <Disabled />}
          </FormLabel>
          {user.name !== null && isUsingSplitFallback && (
            <FallbackNotice>
              <Info size={15} color="#3b82f6" />
              <span>
                We've suggested these based on your Google account name.
              </span>
            </FallbackNotice>
          )}
          <ButtonsContainer>
            {disabled ? (
              <FormButton type="button" onClick={() => setDisabled(false)}>
                Edit
              </FormButton>
            ) : (
              <>
                <FormButtonOutlined
                  type="button"
                  onClick={() => {
                    setDisabled(true);
                  }}
                >
                  Cancel
                </FormButtonOutlined>
                <FormButton type="submit">
                  {isPending ? <Loader inverted={true} /> : "Save"}
                </FormButton>
              </>
            )}
          </ButtonsContainer>
        </StyledForm>
      </PageSection>
    </div>
  );
}
