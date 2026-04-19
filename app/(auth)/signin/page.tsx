"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { signInAction } from "@/lib/auth/actions/signIn";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { ErrorMessage } from "../styles";
import SocialSignIn from "../shared/components/social-signin/social-signin.component";
import AuthRedirect from "../shared/components/auth-redirect/auth-redirect.component";
import LegalNotice from "../shared/components/legal-notice/legal-notice.component";
import {
  FormButton,
  FormInput,
} from "../shared/components/form-elements/form-elements";

export default function Page() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { executeRecaptcha } = useGoogleReCaptcha();

  async function handleSignIn(formData: FormData) {
    startTransition(async () => {
      setError(null);

      try {
        if (!executeRecaptcha) {
          setError("Recaptcha not yet available");
          return;
        }

        const token = await executeRecaptcha("signin_form");

        formData.append("token", token);

        const { error: authError } = await signInAction(formData);

        if (authError) {
          setError(authError.message || "An unexpected error occured.");
        } else {
          window.location.href = "/";
        }
      } catch (error) {
        setError("An unexpected error occured. Please try again.");
      }
    });
  }

  return (
    <>
      <h1>Sign in to your account</h1>
      <form action={handleSignIn}>
        <label htmlFor="email">Email address</label>
        <FormInput name="email" type="email" placeholder="hello@johndoe.com" />

        <label htmlFor="password">
          Password <Link href="/forgot-password"> Forgot your password?</Link>
        </label>
        <FormInput name="password" type="password" placeholder="●●●●●●●" />

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <FormButton name="Sign In" isPending={isPending} />
      </form>

      <AuthRedirect href="/signup" />
      <SocialSignIn />
      <LegalNotice />
    </>
  );
}
