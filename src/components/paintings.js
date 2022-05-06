import '../css/paintings.css';
import brushstrokelong from '../img/brushstrokelong.png';


const Paintings = () => {
    console.log("hit paintings");
    return(
        <div className="pageHeader">
             <h1 className="title">paintings</h1>
            <img className="brushStrokeLong" src={brushstrokelong}/>
        </div>
    )
  };
  
  export default Paintings;