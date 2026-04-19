import { authClient } from "..";

  export async function requestPasswordResetAction (email: string, token: string) {

      const { error } = await authClient.requestPasswordReset({
        email,
        redirectTo: "/reset-password",
        fetchOptions: {
          headers: {
            "x-captcha-response": token
          }
        }
      });

    return {error: error ?? null}
  };