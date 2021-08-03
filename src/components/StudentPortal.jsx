
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

export default function StudentPortal() {


  return (
    <div>
    <TemporaryDrawer />
         <div className = "Portal">
      
      <div className = "Header"></div>
      <div className = "Avatar">
      <img src = {avatar} />
<h3>Nimrah Altaf Adam</h3>
<h4>ID:101</h4>
<h5>Grade:gradeObj</h5>
<h6>School Name:schoolObj</h6>

      </div>
      <div className = "sections">
      <a href = "#myCourses" >My Courses</a> 
      <a href = "#myActivities">My Activites</a>  
      <a href = "#personalInfo">Personal Info</a>
      
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
                  <h4>Science</h4>
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
                  <h4>Maths</h4>
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
                  <h4>English</h4>
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
      <div className="note">
      
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