import StudentPortal from "../StudentPortal"
import Navbar from "../Navbar"
import {useParams,useLocation} from 'react-router-dom';
import axios from 'axios';
import React, {useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import "../Navbar.css";

import Dashboard from "../Dashboard";

function Student() {
  
/**No need of student.jsx */
/**All done with dashboard */



  return (
    <div>
       <div className = "portalBg"></div>
      <Navbar />
      <Link className = "banner" >WESTVIEW JUNIOR SCHOOL </Link>
      {/* <StudentPortal /> */}
      < Dashboard/>
    </div>
  )
}

export default Student;