import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Map from "./Components/Map";
import LoginPage from "./Components/LoginPage";
import React, {useState } from "react";

export const Context = React.createContext();




function App() {
  
const [loggedIn, setLoggedIn] = useState(false);
  return (
    
    <BrowserRouter>
    <Context.Provider value = {[loggedIn, setLoggedIn]}>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/map" element={<Map />}></Route>
        <Route exact path="/loginpage" element={<LoginPage />}></Route>
      </Routes>
    </Context.Provider>
  </BrowserRouter>
  )
}

export default App