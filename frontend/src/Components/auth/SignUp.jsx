import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
        console.log(userCredential)
    }).catch((err) =>{
        console.log(err)
    } )
  }

  return (
    <div className = "sign-in-container">
      <form onSubmit = {handleSubmit}>
        <h1>Create an account</h1>
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
        <button type = "submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
