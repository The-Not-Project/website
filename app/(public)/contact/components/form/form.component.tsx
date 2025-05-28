"use client";

import { useState } from "react";
import { FormContainer } from "./form.styles";

export default function ContactForm({ type }: { type: string }) {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message,
        email: anonymous ? "" : email,
        type: type === "collab" ? "collab" : "feedback",
      }),
    });

    setStatus(res.ok ? "sent" : "error");
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>
        {type == "feedback"
          ? "We’d love to hear from you"
          : "Want to collaborate with us?"}
      </h2>

      {!anonymous && (
        <>
          <label htmlFor="email">{type == 'feedback' ? 'Your email (optional)': 'Best email to reach you (required)'}</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </>
      )}

      {type !== "collab" && (
        <label>
          <input
            type="checkbox"
            checked={anonymous}
            onChange={() => setAnonymous(!anonymous)}
          />
          {"I'd rather stay anonymous"}
        </label>
      )}
      <textarea
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={
          type === "feedback"
            ? "Tell us anything: feedback, thoughts, or just a hello."
            : "Tell us about your idea, project, or how you'd like to work together."
        }
      ></textarea>

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      {status === "sent" && <p>Message sent!</p>}
      {status === "error" && <p>Something went wrong.</p>}
    </FormContainer>
  );
}
