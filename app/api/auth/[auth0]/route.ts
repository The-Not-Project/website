import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  login: handleLogin({
    returnTo: "/",
    authorizationParams: {
      audience: "http://localhost:3000/",
    }
  }),
  signup: handleLogin({
    authorizationParams: {
      screen_hint: "signup",
      audience: "http://localhost:3000/",
    },
    returnTo: "/",
  }),
});