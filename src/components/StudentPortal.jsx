import "./StudentPortal.css";
//import AvatarGen from "./Avatar";
//import Avatar from "avataaars";
import avatar from "../images/avatar.png";
import border from "../images/border.png";
import note from "../images/notebook.jpg";

import React, {useEffect, useState } from 'react';
import {Button, Breadcrumb ,Card} from 'react-bootstrap';

/*import './dashboard.css';*/
import Portalnavbar  from './Portalnavbar';
import Portalmainbody from './Main';
import {useParams,useLocation} from 'react-router-dom';
import axios from 'axios';



import TemporaryDrawer from "./sidebar";

export default function StudentPortal(props) {

  


  return (
    <div>
    <TemporaryDrawer Status = {props.Status} />
         <div className = "Portal">
      
      <div className = "Header"></div>
      <div className = "Avatar">
      <img src = {avatar} />
<h3>{props.Name}</h3>
<h4>{props.Grade}</h4>

      </div>
      <div className = "sections">
      <a href = "#MyCourses" >My Courses</a> 
      <a href = "#myActivities">My Activites</a>  
      <a href = "/NotesSection">Personalise Notes</a>
      
      </div>
      <div className="MyCourses">
        <div class="container">
          <div class="card">
            <div class="box">
              <div class="content">
                <div>
                  <video
                    src="https://media.istockphoto.com/videos/test-tubes-video-id1293196530"
                    autoPlay
                    loop
                    muted
                  />
                </div>
                <h2>1</h2>
                <div className="det">
                  <h3>The Science Curriculum includes</h3>
                  <p>
                    <li>Animals</li>
                    <li>Habitats</li>
                    <li>Space</li>
                    <li>Weather</li>
                    <li>Land</li>
                  </p>
<a href="/quiz"><h4>Science</h4></a>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="box">
              <div class="content">
                <img src="https://i.pinimg.com/originals/a6/ae/72/a6ae72aff13f14f151ff1d016288a09e.gif" />
                <h2>2</h2>
                <h3>The Math Curriculum includes:</h3>
                <p>
                  <li>Adition</li>
                  <li>Subtraction</li>
                  <li>Geometry</li>
                  <li>Measurement</li>
                  <li>Time</li>
                </p>
                <div className="greenhover">
                  {/* <h4>Maths</h4> */}
                  <a href="/quizmaths"><h4>Maths</h4></a>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="box">
              <div class="content">
                <video
                  className="card3"
                  src="https://media.istockphoto.com/videos/world-book-day-celebration-with-little-kids-reading-video-id1217274319"
                  autoPlay
                  loop
                  muted
                />

                <h2>3</h2>
                <h3>The Englsih Curriculum includes</h3>
                <p>
                  <li>Comprehension</li>
                  <li>Phonics</li>
                  <li>Punctuation</li>
                  <li>Sentence</li>
                  <li>Writing</li>
                </p>
                <div className="purplehover">
                  {/* <h4>English</h4> */}
                  <a href="/quizeng"><h4>English</h4></a>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="box">
              <div class="content">
                <img src="https://i.pinimg.com/originals/74/86/9b/74869ba9a43b6879447be432228c74e5.gif" />

                <h2>4</h2>
                <h3>The Social Studies Curriculum includes</h3>
                <p>
                  <li>Citizenship</li>
                  <li>Ancient History</li>
                  <li>Government</li>
                  <li>Economic</li>
                  <li>Geography</li>
                </p>
                <div className="yellowhover">
                  <h4>Social Studies</h4>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="box">
              <div class="content">
                <img src="https://media2.giphy.com/media/dvNwhVCMyvEwSLPRem/giphy.gif" />

                <h2>5</h2>
                <h3>The Arts & Craft Curriculum includes</h3>
                <p>
                  <li>Painting</li>
                  <li>Sketching</li>
                  <li>Music</li>
                  <li>Pottery</li>
                  <li>Drawing</li>
                </p>
                <div className="peachhover">
                  <h4>Arts & Craft</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shape"></div>
      <div className="swing" >
    <img
        
        src="https://cdn.dribbble.com/users/696579/screenshots/5339922/nds_800x600.gif"
      />
      </div>
      <div className="noteS">
      
        <img src={note} />
      </div>  
    
        <div className="myActivities">
          <h1 className="myActivitiesHeader">Lets Learn Together</h1>
          <p className="myActivitiesPelement">
            <i>Education is not the learrning of facts,</i>{" "}
          </p>
          <p className="myActivitiesPelement">
            <i>but the training of the mind to think!</i>
          </p>
      </div>

      <div>
      <div class="scallop-up"></div>
<div class="colour-block" id = "myActivities">

<div class = "book">
  <img src = "https://i.pinimg.com/474x/2b/7a/c7/2b7ac798cd239a09765c486f71d2f931.jpg" />
</div>

<div className = "divider">
<h1>My Activities</h1>
<p>You can now upload and share your work with your classfellows! </p>
</div>
<div className="secondCard">
        <a href="#" class="card credentialing">
          <div class="overlay"></div>
          <div class="circle">
            <svg
              width="64px"
              height="72px"
              viewBox="27 21 64 72"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Sketch.</desc>
              <defs>
                <polygon
                  id="path-1"
                  points="60.9784821 18.4748913 60.9784821 0.0299638385 0.538377293 0.0299638385 0.538377293 18.4748913"
                ></polygon>
              </defs>
              <g
                id="Group-12"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                transform="translate(27.000000, 21.000000)"
              >
                <g id="Group-5">
                  <g id="Group-3" transform="translate(2.262327, 21.615176)">
                    <mask id="mask-2" fill="white">
                      <use xlinkHref="#path-1"></use>
                    </mask>
                    <g id="Clip-2"></g>
                    <path
                      d="M7.17774177,18.4748913 L54.3387782,18.4748913 C57.9910226,18.4748913 60.9789911,15.7266455 60.9789911,12.3681986 L60.9789911,6.13665655 C60.9789911,2.77820965 57.9910226,0.0299638385 54.3387782,0.0299638385 L7.17774177,0.0299638385 C3.52634582,0.0299638385 0.538377293,2.77820965 0.538377293,6.13665655 L0.538377293,12.3681986 C0.538377293,15.7266455 3.52634582,18.4748913 7.17774177,18.4748913"
                      id="Fill-1"
                      fill="#59A785"
                      mask="url(#mask-2)"
                    ></path>
                  </g>
                  <polygon
                    id="Fill-4"
                    fill="#FFFFFF"
                    transform="translate(31.785111, 30.877531) rotate(-2.000000) translate(-31.785111, -30.877531) "
                    points="62.0618351 55.9613216 7.2111488 60.3692832 1.50838775 5.79374073 56.3582257 1.38577917"
                  ></polygon>
                  <ellipse
                    id="Oval-3"
                    fill="#25D48A"
                    opacity="0.216243004"
                    cx="30.0584472"
                    cy="21.7657707"
                    rx="9.95169733"
                    ry="9.17325562"
                  ></ellipse>
                  <g
                    id="Group-4"
                    transform="translate(16.959615, 6.479082)"
                    fill="#54C796"
                  >
                    <polygon
                      id="Fill-6"
                      points="10.7955395 21.7823628 0.11873799 11.3001058 4.25482787 7.73131106 11.0226557 14.3753897 27.414824 1.77635684e-15 31.3261391 3.77891399"
                    ></polygon>
                  </g>
                  <path
                    d="M4.82347935,67.4368303 L61.2182039,67.4368303 C62.3304205,67.4368303 63.2407243,66.5995595 63.2407243,65.5765753 L63.2407243,31.3865871 C63.2407243,30.3636029 62.3304205,29.5263321 61.2182039,29.5263321 L4.82347935,29.5263321 C3.71126278,29.5263321 2.80095891,30.3636029 2.80095891,31.3865871 L2.80095891,65.5765753 C2.80095891,66.5995595 3.71126278,67.4368303 4.82347935,67.4368303"
                    id="Fill-8"
                    fill="#59B08B"
                  ></path>
                  <path
                    d="M33.3338063,67.4368303 L61.2181191,67.4368303 C62.3303356,67.4368303 63.2406395,66.5995595 63.2406395,65.5765753 L63.2406395,31.3865871 C63.2406395,30.3636029 62.3303356,29.5263321 61.2181191,29.5263321 L33.3338063,29.5263321 C32.2215897,29.5263321 31.3112859,30.3636029 31.3112859,31.3865871 L31.3112859,65.5765753 C31.3112859,66.5995595 32.2215897,67.4368303 33.3338063,67.4368303"
                    id="Fill-10"
                    fill="#4FC391"
                  ></path>
                  <path
                    d="M29.4284029,33.2640869 C29.4284029,34.2202068 30.2712569,34.9954393 31.3107768,34.9954393 C32.3502968,34.9954393 33.1931508,34.2202068 33.1931508,33.2640869 C33.1931508,32.3079669 32.3502968,31.5327345 31.3107768,31.5327345 C30.2712569,31.5327345 29.4284029,32.3079669 29.4284029,33.2640869"
                    id="Fill-15"
                    fill="#FEFEFE"
                  ></path>
                  <path
                    d="M8.45417501,71.5549073 L57.5876779,71.5549073 C60.6969637,71.5549073 63.2412334,69.2147627 63.2412334,66.3549328 L63.2412334,66.3549328 C63.2412334,63.4951029 60.6969637,61.1549584 57.5876779,61.1549584 L8.45417501,61.1549584 C5.34488919,61.1549584 2.80061956,63.4951029 2.80061956,66.3549328 L2.80061956,66.3549328 C2.80061956,69.2147627 5.34488919,71.5549073 8.45417501,71.5549073"
                    id="Fill-12"
                    fill="#5BD6A2"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <p>Collection</p>
          <span class="add green">
            <i class = "far fa-plus-octagon" />
          </span>
        </a>
      </div>
<input style = {{marginTop:"450px", marginLeft:"250px"}} className = "btn" type = "file" name = "file" />
         
          
          <div>
           <a href="/pdfpreview"> <button style = {{zIndex:"3", marginTop:"-250px", marginLeft:"390px"}}  className = "btn" >View File</button></a>
          </div>
</div>
<div class="scallop-down"></div>
</div>



      <div className="demo">
        <div class="hover14 column">
          <figure>
          <div  className = "border">
            <img  src={border} />
          </div>
          </figure>
        </div>
      </div>
    </div>
    </div>

  );
}

/*<div className = "coursecontainer" ></div>*/