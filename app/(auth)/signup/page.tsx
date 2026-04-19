"use client";

import { useState, useTransition } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { ErrorMessage } from "../styles";
import { signUpAction } from "@/lib/auth/actions/signUp";
import LegalNotice from "../shared/components/legal-notice/legal-notice.component";
import SocialSignIn from "../shared/components/social-signin/social-signin.component";
import AuthRedirect from "../shared/components/auth-redirect/auth-redirect.component";
import { FormButton, FormInput } from "../shared/components/form-elements/form-elements";
import Honeypot from "@/app/utils/honeypot/honeypot.component";

export default function Page() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSignUp = async (formData: FormData) => {

    const confirmEmail = formData.get("confirm-email") as string; 
    if (confirmEmail) {
      setError("Bot detected. If you're not a bot, please leave the 'Confirm Email' field empty.");
      return;
    }

    startTransition(async () => {
      if (!executeRecaptcha) {
        setError("Recaptcha not yet available");
        return;
      }
      setError(null);

      try {
        const token = await executeRecaptcha("signup_form");
        
        formData.append("token", token);
        
        const { error: authError } = await signUpAction(formData);
        
        if (authError) {
          setError(authError.message || "An unexpected error occured.");
        } else {
          window.location.href = "/";
        }
      } catch (error) {
        setError("An unexpected error occured. Please try again.");
      }
    });
  };

  return (
    <>
      <h1>Sign up for an account</h1>
      <form action={handleSignUp}>
        <label htmlFor="firstName">First Name</label>
        <FormInput name="firstName" placeholder="John" />

        <label htmlFor="lastName">Last Name</label>
        <FormInput name="lastName" placeholder="Doe" />


        <label htmlFor="email">Email address</label>
        <FormInput name="email" type="email" placeholder="hello@johndoe.com" />
        
        <Honeypot name="confirm-email" />

        <label htmlFor="password">Password</label>
        <FormInput name="password" type="password" placeholder="●●●●●●●" />

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <FormButton name="Sign Up" isPending={isPending} />

      </form>

      <AuthRedirect href="/signin" />
      <SocialSignIn />
      <LegalNotice />
    </>
  );
}
