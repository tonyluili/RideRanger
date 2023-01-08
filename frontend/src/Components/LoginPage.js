import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider"
import axios from "../api/axios";
const LOGIN_URL = "/auth";
function LoginPage() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage("");
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify({ user, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true
        })
        console.log(JSON.stringify(response?.data));
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        setAuth({user, password, roles, accessToken})
      setUser("");
      setPassword("");
      setSuccess(true);

    } catch (err) {
      if(!err?.response){
        setErrorMessage("No Server Response");
      }
      else if(err.response?.status === 400){
        setErrorMessage("Missing Username or Password");
      }
      else if(err.response?.status === 401){
        setErrorMessage("Unauthorized");
      }
      else{
        setErrorMessage("Login Failed")
      }
      errRef.current.focus();
    }
  }


  return (
    <>
      {success ? (
        <div>
          <h1>Success you are logged in!</h1>
          <br />
          <p>
            <a href="#"> Go to home</a>
          </p>
        </div>
      ) : (
        <div>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" ref={userRef} autocomplete="off" onChange={(e) => {
              setUser(e.target.value)
            }}

              value={user}
              required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" onChange={(e) => {
              setPassword(e.target.value)
            }}

              value={password}
              required />
            <button>Sign In</button>
          </form>
          <p>Need an Account? <br /> <span className="line">{
            <a href="#">Sign Up</a>
          }</span></p>
        </div>
      )}
    </>)
}

export default LoginPage;
