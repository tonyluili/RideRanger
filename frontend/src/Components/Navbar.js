import React, { Component } from 'react'
import { Link } from "react-router-dom"
export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <Link className='navbarItem' to="/" >Home🏠</Link>
        <Link className='navbarItem' to="/map"> Map🗺️</Link>
        <Link className='navbarItem' to="/loginpage">Login Page</Link>
      </div>

    )
  }
}
