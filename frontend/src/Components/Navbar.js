import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to = "/" >Home</Link>
        <Link to = "/map"> Map</Link>
        <Link to = "/loginpage">Login Page</Link>
      </div>
      
    )
  }
}
