import React from "react";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import AuthDetails from "./AuthDetails";

import "../App.css";
function LoginPage() {
  return (
    <div>
      <SignIn className="loginpage"></SignIn>
      <br />
      <br />
      <AuthDetails className="loginpage"></AuthDetails>
    </div>
  );
}

export default LoginPage;
