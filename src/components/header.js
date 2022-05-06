import React from "react";
import { Outlet, Link } from 'react-router-dom';
import '../css/header.css';
import brushstroke from '../img/brushstroke.png';
// import { SiInstagram } from "react-icons/si";

function Header() {

  return (
    <div className="header">
      <h1 className="nameHeader">MECIE</h1>
      <p className="headerLink"><Link to="/">paintings</Link></p>
      <img className="brushStroke" src={brushstroke}/>
      <p className="headerLink"><Link to="About">about</Link></p>
      <img className="brushStroke" src={brushstroke}/>
      <p className="headerLink"><Link to="Contact">contact</Link></p>
      <img className="brushStroke" src={brushstroke}/>
      <Outlet />
    </div>
  );
}

export default Header;
