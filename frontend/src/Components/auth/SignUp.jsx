import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
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
        
      <Paper>
        <Typography>Create an account</Typography>
        <TextField
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type = "submit" variant = "contained">Sign Up</Button>
        
      </Paper>
      </form>
    </div>
  );
};

export default SignUp;
