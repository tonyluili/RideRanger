import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Map from "./Components/Map"
import Login from "./Components/LoginPage";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path= "/map" element = {<Map/>}></Route>
          <Route exact path= "/login" element = {<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
