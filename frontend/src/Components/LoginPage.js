import React from "react";
import axios, { isCancel, AxiosError } from "axios";
function LoginPage() {
  const login = () => {
    axios.get(() => {});
  };
  return (
    <div>
      <h1>Login</h1>
      <div>
        <span>Username:</span>
        <input type="text" />
      </div>
      <br />
      <div>
        <span>Password:</span>
        <input type="text" />
      </div>
    </div>
  );
}

export default LoginPage;
