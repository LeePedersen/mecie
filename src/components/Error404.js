import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../css/Error404.css';

function Error404(){
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <div className="errorMessage">
        <h2>The page {location.pathname} does not exist!</h2>

        <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
      </div>
    </>
  );
}

export default Error404;
