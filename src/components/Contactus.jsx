import React from 'react';

import './Contactus.css';
import Navbar from "../components/Navbar";
import "../components/Navbar.css";
import {Link} from "react-router-dom";

function Contactus(){
  

    return(

    <>
     <Navbar />
     <Link className = "banner" >WESTVIEW JUNIOR SCHOOL </Link>
      <div className ="container-fluid hello  ">

<div className ="hello_con">
      <img className ="img_con" src="https://eblog.network/wp-content/uploads/2019/04/contact-us-hover.gif" alt=""/>
  </div>











  <section className ="form_con">
      <div className ="row two_things">
          <div className ="col-lg-3 col-md-8 col-sm-12 charac ">
<img src="https://gifimage.net/wp-content/uploads/2018/11/pointing-gif-animation-9.gif" alt=""/>
          </div>


          <div className ="col-lg-7 col-md-8 col-sm-12 contact_form">

      {/* <!-- <div className ="container"> --> */}
<div className ="insider">
          <h2 className ="get"> Get In Touch With Us</h2>
  
      <div className ="row100">
          <div className ="col">
              <div className ="inputBox">
                  <span className ="text">Name</span>
                  <input type="text" name="" required="required"/>
                 
                  <span className ="line"></span>
              </div>
          </div>
          <div className ="col">
              <div className ="inputBox">
                  <span className ="text">Status</span>
                  <input type="text" name="" required="required"/>
                  
                  <span className ="line"></span>
              </div>
          </div>
          <div className ="row100">
              <div className ="col">
                  <div className ="inputBox">
                     <span className ="text">Email</span>
                      <input type="text" name="" required="required"/>

                      <span className ="line"></span>
                  </div>
              </div>
              <div className ="col">
                  <div className ="inputBox">
                      <span className ="text">Contact</span>
                      <input type="text" name="" required="required"/>

                      <span className ="line"></span>
                  </div>
              </div>
          </div>
      </div>

      <div className ="row100">
          <div className ="col">
              <div className ="inputBox textarea">
                  <span className ="text">Your Message ...</span>
               <textarea required="required"></textarea>
                  
                  <span className ="line"></span>
              
              </div>
          </div>
      </div>

      <div className ="row100">
          <div className ="col">
              <input type="submit" value="Send"/>
              
              </div>
          {/* <!-- </div> --> */}
      </div>
  </div>


</div>

  </div>

{/* </div> */}


<div className ="waves">
  <svg viewBox="0 0 1250 300">
      <path fill-opacity="0.7" d="
      M0,192
      C220,100,440,100,660,192
      C880,290,1100,290,1320,192
      L1320 500
      L0 500
      " fill="rgb(250, 33, 87)"/>
      <path fill-opacity="0.7" d="
      M0,192
      C220,100,440,100,660,192
      C880,290,1100,290,1320,192
      L1320 500
      L0 500
      " fill="rgb(255, 107, 38)"/>
      <path fill-opacity="0.7" d="
      M0,192
      C220,100,440,100,660,192
      C880,290,1100,290,1320,192
      L1320 500
      L0 500
      " fill="rgb(23, 221, 106)"/>
      <path fill-opacity="0.7" d="
      M0,192
      C220,100,440,100,660,192
      C880,290,1100,290,1320,192
      L1320 500
      L0 500
      " fill="rgb(251, 255, 35)"/>
  </svg>
</div>

  </section>
  

  
  </div>


    </>




    )




}

export default Contactus;

