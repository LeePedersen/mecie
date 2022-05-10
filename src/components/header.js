import React from "react";
import { Outlet, Link } from 'react-router-dom';
import '../css/header.css';
import brushstroke from '../img/brushstrokegreen.png';
// import { SiInstagram } from "react-icons/si";

function Header() {

  return (
    <div className="header">
      <h1 className="nameHeader">MECIE</h1>
      <h1 className="headerLink"><Link to="/">paintings</Link></h1>
      <h1 className="headerLink"><Link to="About">about</Link></h1>
      <h1 className="headerLink"><Link to="Contact">contact</Link></h1>
      <Outlet />
    </div>
  );
}

export default Header;
