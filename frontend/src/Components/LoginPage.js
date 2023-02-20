import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import LinkedList from "./LinkedList";
function LoginPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChangeUser = (e) => {
    setUser(() => e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(() => e.target.value);
  };

  const handleClick = () => {};

  return (
    <div>
      <form action="">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleOnChangeUser}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          name="username"
          onChange={handleOnChangePassword}
        />
        <button>Sign Up</button>
      </form>
      {user}
      <br />
      {password}
      <div></div>
      <form action="">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleOnChangeUser}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          name="username"
          onChange={handleOnChangePassword}
        />
        <button>Login</button>
      </form>
      {user}
      <br />
      {password}
    </div>
  );
}

export default LoginPage;
