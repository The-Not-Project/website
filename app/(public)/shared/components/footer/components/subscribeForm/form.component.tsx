import Swal from "sweetalert2";
import ReactDOMServer from "react-dom/server";
import { usePublicServerActions } from "@/app/contexts/public-server-actions";
import { ConsentText, SignUp, SignUpForm, SignUpSection } from "./form.styles";
import PrivacyPolicy from "@/app/constants/privacyPolicy";
import TermsAndConditions from "@/app/constants/termsConditions";

export default function Form() {
  const { createSubscriber } = usePublicServerActions();

  type SignUpFormFields = {
    email: { value: string };
    phone: { value: string };
  };

  async function handleSignUp(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    const form = event.target as HTMLFormElement & SignUpFormFields;
    const email: string = form.email.value;
    const phone: string = form.phone.value;

    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email address.",
        confirmButtonText: "close",
        customClass: {
          confirmButton: "popup-button",
        },
        buttonsStyling: false,
      });
      return;
    }

    const response = await createSubscriber(email, phone ?? null);

    if (response === "Email already subscribed") {
      Swal.fire({
        icon: "info",
        title: "Already Subscribed",
        text: "This email is already subscribed to our updates.",
        confirmButtonText: "close",

        customClass: {
          confirmButton: "popup-button",
        },
        buttonsStyling: false,
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Thanks for subscribing!",
      text: "You have successfully signed up for updates.",
      confirmButtonText: "close",
      customClass: {
        confirmButton: "popup-button",
      },
      buttonsStyling: false,
    });

    form.reset();
  }

  const handleClick = (type: "privacy" | "terms") => {
    const content =
      type === "privacy"
        ? ReactDOMServer.renderToString(<PrivacyPolicy />)
        : ReactDOMServer.renderToString(<TermsAndConditions />);

    Swal.fire({
      title: type === "privacy" ? "Privacy Policy" : "Terms & Conditions",
      html: `<div style="max-height: 70vh; overflow-y: auto; text-align: left;">${content}</div>`,
      showCloseButton: true,
      showConfirmButton: false,
      allowOutsideClick: true,
      customClass: {
        popup: "custom-swal-popup",
      },
    });
  };

  return (
    <SignUpSection>
      <h2>Never Miss Out</h2>
      <SignUpForm onSubmit={(e) => handleSignUp(e)}>
        <p>Be the first to know about our new stories.</p>
        <SignUp>
          <input type="email" name="email" placeholder="Email address" />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number (optional)"
          />
          <button type="submit">Sign Up</button>
        </SignUp>
      </SignUpForm>
      <ConsentText>
        By entering your phone number and submitting this form, you consent to
        receive marketing text messages from The Not Project at the number
        provided, including messages sent by autodialer. Message and data rates
        may apply. Message frequency varies. You can unsubscribe at any time by
        replying STOP or clicking the unsubscribe link (where available) in one
        of our messages. View our{" "}
        <span onClick={() => handleClick("privacy")}>Privacy Policies</span> and{" "}
        <span onClick={() => handleClick("terms")}>Terms & Conditions</span>.
      </ConsentText>
    </SignUpSection>
  );
}
