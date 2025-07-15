import { useGoogleLogin } from "@react-oauth/google";

export function useGoogleAuth() {
  return useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Google login success", tokenResponse);
      localStorage.setItem("token", tokenResponse.access_token);
      alert("Google login successful!");
    },
    onError: () => {
      alert("Google login failed");
    },
  });
}
