import React from "react";
import brushstrokelong from '../img/brushstrokegreen.png';
import '../css/pageheader.css';

function PageHeader(props) {
  const title = props.title;
  return(
    <div className="pageHeader">
      <h1 className="title">{title}</h1>
      <img className="brushStrokeLong" src={brushstrokelong}/>
    </div>
  )
}

export default PageHeader;