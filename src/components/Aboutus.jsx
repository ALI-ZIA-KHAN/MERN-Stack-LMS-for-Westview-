import React from 'react';
import './Aboutus.css'
import Navbar from "../components/Navbar";
import "../components/Navbar.css";

import {Link} from "react-router-dom";

function Aboutus(){

 return(
   
    <>
   
{/*     
      <div className ="container-fluid about"> */}

          
{/* </div> */}

{/* <div className="row_first">
              <div className="col-lg-6">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPf8cnEiVS805HD3B4j5iwi3y9oKVrbLm4w&usqp=CAU" alt="" />
              </div>
              <div className="col-lg-6">
                  <img src="http://inbase.in/images/Designing-Fever-About-Us.gif" alt="" />

              </div>
          </div> */}
{/* <div>

<h1>hello</h1>
<svg width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#0099ff" fill-opacity="1" d="M0,128L10.9,149.3C21.8,171,44,213,65,240C87.3,267,109,277,131,240C152.7,203,175,117,196,85.3C218.2,53,240,75,262,112C283.6,149,305,203,327,208C349.1,213,371,171,393,154.7C414.5,139,436,149,458,154.7C480,160,502,160,524,154.7C545.5,149,567,139,589,133.3C610.9,128,633,128,655,149.3C676.4,171,698,213,720,240C741.8,267,764,277,785,234.7C807.3,192,829,96,851,96C872.7,96,895,192,916,224C938.2,256,960,224,982,186.7C1003.6,149,1025,107,1047,90.7C1069.1,75,1091,85,1113,101.3C1134.5,117,1156,139,1178,144C1200,149,1222,139,1244,122.7C1265.5,107,1287,85,1309,64C1330.9,43,1353,21,1375,21.3C1396.4,21,1418,43,1429,53.3L1440,64L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z">
        </path></svg>
</div>
    </> */}

<div class="topper py-1  ps-4  text-white ">
        <p>57/A, GREEN LANE, NYC  +10 (78) 367 3692</p>

    
    </div>

<div class="main_head">
    <div class="loading">
        <h2 >About_Us..</h2>
    </div>

</div>
<div class="main_content "> 
    <img class="u_smoky bg-transparent" src="https://xpressrow.com/html/kinter/img/shape/section-notch-top.png" alt=""/>
    
    <img class="l_smoky bg-transparent"  src="https://xpressrow.com/html/kinter/img/shape/section-notch-top.png" alt=""/>

    
  

 </div>
 


 <div class="layswavy">

</div>


<div class="container_two  our_mission text-center">
        <h2 ><span class="mission_head">Our  Mission</span></h2>
      <p class="mt-3 para_in">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt atque <br/>
        voluptates ut doloribus eveniet commodi quaerat aliquid hic soluta sint dicta voluptas <br/></p>
      
</div>


<div class="layswavy">

</div>
 

<div className="container_three mt-5">
  <div className="first_child_three">

    

<div class="accordion">
    <div class="image-box">
      <img src="https://d2x3xhvgiqkx42.cloudfront.net/cb4c0952-86ff-4f49-bb6c-c682c6d0dae1/df647fdd-b8c1-460f-a0d5-f406fe47c81c/2018/12/30/b62fbde2-d7db-4d11-b394-5ed385958375.gif" alt="Accordion Image"/>
    </div>
    <div class="accordion-text">
      <div class="title">FAQ</div>
    <ul class="faq-text">
      <li>
        <div class="question-arrow">
          <span class="question">What do you mean by HTML & CSS?</span>
          <i class="bx bxs-chevron-down arrow"></i>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, doloribus.</p>
        <span class="line"></span>
      </li>
      <li>
        <div class="question-arrow">
          <span class="question">What do you mean by JavaScript?</span>
          <i class="bx bxs-chevron-down arrow"></i>
        </div>
        <p>JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive</p>
        <span class="line"></span>
      </li>
      <li>
        <div class="question-arrow">
          <span class="question">From where you learned HTML & CSS?</span>
          <i class="bx bxs-chevron-down arrow"></i>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, necessitatibus.</p>
        <span class="line"></span>
      </li>
      <li>
        <div class="question-arrow">
          <span class="question">Which code editor do you use?</span>
          <i class="bx bxs-chevron-down arrow"></i>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, labore.</p>
        <span class="line"></span>
      </li>
      <li>
        <div class="question-arrow">
          <span class="question">Software you use for video editing?</span>
          <i class="bx bxs-chevron-down arrow"></i>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, repudiandae!</p>
        <span class="line"></span>
      </li>
    </ul>
    </div>
  </div>



















  </div>
<div className="second_child_three">
<img className="faq_image" src="http://inbase.in/images/Designing-Fever-About-Us.gif" alt="" />

</div>



</div>



<div class="layswavy">

</div>




<div class="container_two mt-5 our_mission text-center">
        <h2 ><span class="mission_head">Our  Team</span></h2>
      
      
</div>





<div className="container_four">


<div class="slider_about">
    <div class="slide_track">
        <div class="slide_about">
            <img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
        </div>
        <div class="slide_about">
            <img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
        </div>
        <div class="slide_about">
            <img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
        </div>
        <div class="slide_about">
            <img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
        </div>
        <div class="slide_about">
            <img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
        </div>
        <div class="slide_about">
            <img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
        </div>
        <div class="slide_about">
            <img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
        </div>
        <div class="slide_about">
            <img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
        </div>
        <div class="slide_about">
            <img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
        </div>







        <div class="slide_about">
            <img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
        </div>
        <div class="slide_about">
            <img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
        </div>
        <div class="slide_about">
            <img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
        </div>
        <div class="slide_about">
            <img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
        </div>
        <div class="slide_about">
            <img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
        </div>
        <div class="slide_about">
            <img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
        </div>
        <div class="slide_about">
            <img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
        </div>
        <div class="slide_about">
            <img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
        </div>
        <div class="slide_about">
            <img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
        </div>
    </div>
</div>



</div>

</>
 );


}

export default Aboutus;