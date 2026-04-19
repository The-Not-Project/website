"use client";

import * as alerts from "@/app/utils/sweetalert";
import { CaptchaNotice, SubscribeForm, SubscribeSection } from "./form.styles";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Honeypot from "@/app/utils/honeypot/honeypot.component";

type FormProps = {
  submitAction: (
    email: string,
    token: string,
    phone?: string,
  ) => Promise<string>;
};

export default function Form({ submitAction }: FormProps) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  async function handleSignUp(formData: FormData): Promise<void> {
    if (!executeRecaptcha) {
      alert("Recaptcha not yet available");
      return;
    }
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const confirmEmail = formData.get("confirm-email") as string;

    if (confirmEmail && confirmEmail.length > 0) {
      alerts.subscribeSuccessAlert()
      return
    }

    if (!email) {
      alerts.subscribeEmailAlert()
      return;
    }

    try {
      const token = await executeRecaptcha("subscribe_form");
      const response = await submitAction(email, token, phone ?? null);

      if (response === "Email already subscribed") {
        alerts.subscribeAlreadyAlert()
        return;
      }

      alerts.subscribeSuccessAlert()
    } catch (error) {
      alerts.subscribeErrorAlert()
    }
  }

  return (
    <SubscribeSection>
      <SubscribeForm action={handleSignUp}>
        <p>Be the first to know about our new stories.</p>
        <input
          type="email"
          name="email"
          placeholder="example@domain.com"
          required
        />
        <Honeypot name="confirm-email"/>
        <input type="tel" name="phone" placeholder="Phone number (optional)" />
        <CaptchaNotice>
          This site is protected by reCAPTCHA; the Google{" "}
          <a href="https://policies.google.com/privacy">Privacy Policy</a> and{" "}
          <a href="https://policies.google.com/terms">Terms</a> apply.
        </CaptchaNotice>
        <button type="submit">Sign Up</button>
      </SubscribeForm>
    </SubscribeSection>
  );
}
