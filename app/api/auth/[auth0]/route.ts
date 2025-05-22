import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  login: handleLogin({
    returnTo: "/",
    authorizationParams: {
      audience: process.env.AUTHO_API_IDENTIFIER,
    }
  }),
  signup: handleLogin({
    authorizationParams: {
      screen_hint: "signup",
      audience: process.env.AUTHO_API_IDENTIFIER,
    },
    returnTo: "/",
  }),
});