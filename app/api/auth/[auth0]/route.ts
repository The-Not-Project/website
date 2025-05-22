import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  login: handleLogin({
    returnTo: "/",
    authorizationParams: {
      audience: "https://www.thenotproject.com/",
    }
  }),
  signup: handleLogin({
    authorizationParams: {
      screen_hint: "signup",
      audience: "https://www.thenotproject.com/",
    },
    returnTo: "/",
  }),
});