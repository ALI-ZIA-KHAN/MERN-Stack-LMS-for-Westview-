import StudentPortal from "../StudentPortal"
import Navbar from "../Navbar"
import {useParams,useLocation} from 'react-router-dom';
import axios from 'axios';
import React, {useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import "../Navbar.css";

function Student(props) {
  

  return (
    <div>
       <div className = "portalBg"></div>
      <Navbar />
      <Link className = "banner" >WESTVIEW JUNIOR SCHOOL </Link>
      <StudentPortal />
      
    </div>
  )
}

export default Student;