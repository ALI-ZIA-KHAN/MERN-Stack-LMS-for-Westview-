import React from 'react'
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Slider from '../3D_slider';



function Home() {
  return (
    <>
    <div className = "bg"></div>
    <Navbar />
    <HeroSection />
    <Slider />
    <Cards />
    <Footer />
      
    </>
  );
}

export default Home