import React from "react";
import brushstrokelong from '../img/brushstrokegreen.png';
import '../css/pageheader.css';

function PageHeader() {
  return(
    <div className="pageHeader">
      <h1 className="title">paintings</h1>
      <img className="brushStrokeLong" src={brushstrokelong}/>
    </div>
  )
}

export default PageHeader;