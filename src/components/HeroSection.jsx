import React, {useState} from 'react';
import "../App.css";
import {Button} from "./Button";
import "./HeroSection.css";
import video from "../videos/video-1.mp4";
// import anime from "animejs/lib/anime.es.js";


function HeroSection() {
/*const [header,setHeader] = useState({header})
  // Wrap every letter in a span
let textWrapper = document.querySelector('.ml16');
console.log(textWrapper);
var heading = textWrapper.textContent;
console.log(heading);
textWrapper.innerHTML = heading.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true})
  .add({
    targets: '.ml16 .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.ml16',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });*/

  return (
    <div className = "hero-container">
      <video src={video} autoPlay loop muted />
      <h1>Welcome To Westview Junior School</h1>
      <p>What are you waiting for?</p>
      <div className = "hero-butns">
        <Button 
        className = "butns"
        buttonStyle = "butn--outline"
        buttonSize = "butn--large"
        >
          GET STARTED
        </Button>

        <Button 
        className = "butns"
        buttonStyle = "butn--primary"
        buttonSize = "butn--large"
        >
          ABOUT US
          <i className = "far fa-play-circle" />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection