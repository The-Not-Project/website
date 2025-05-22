import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  login: handleLogin({
    returnTo: "/",
    authorizationParams: {
      audience: process.env.AUTH0_BASE_URL,
    }
  }),
  signup: handleLogin({
    authorizationParams: {
      screen_hint: "signup",
      audience: process.env.AUTH0_BASE_URL,
    },
    returnTo: "/",
  }),
});