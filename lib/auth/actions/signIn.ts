import { authClient } from "..";

export async function signInAction(formData: FormData) {

      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      const token = formData.get("token") as string;

      const { error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/",
        fetchOptions: {
          headers: {
            "x-captcha-response": token
          }
        }
      });

    return {error: error ?? null}
  }