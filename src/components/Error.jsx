import React from 'react';
import './Error.css';
import {Link} from "react-router-dom";

function Errorfourzerofour(){

  return(
      <>
      <div className="full_new">
          <h1 className="oops">Oops Wrong Destination</h1>
       <Link className="oopsie" to="/">Go Back</Link>
</div>
      </>
  )


}

export default Errorfourzerofour;