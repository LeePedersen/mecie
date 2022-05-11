import '../css/paintings.css';
import brushstrokelong from '../img/brushstrokelonggreen.png';


const Paintings = () => {
    console.log("hit paintings");
    return(
        <div className="pageHeader">
            <h1 className="title">paintings</h1>
            <div className="longDiv">
            <img className="brushStrokeLong" src={brushstrokelong}/>
            </div>
        </div>
    )
  };
  
  export default Paintings;