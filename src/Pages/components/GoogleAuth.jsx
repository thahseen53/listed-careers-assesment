import { GoogleLogin } from "@react-oauth/google";
import { redirect } from "react-router-dom";

const google = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        sessionStorage.setItem(
          "id",
          JSON.stringify(credentialResponse.idToken)
        );
        redirect("/dashboard");
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default google;
