import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase"
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
        console.log(userCredential)
    }).catch((err) =>{
        console.log(err)
    } )
  }

  return (
    <div className = "sign-in-container">
      <form onSubmit = {handleSubmit}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type = "submit">Login</button>
      </form>
    </div>
  );
};

export default SignIn;
