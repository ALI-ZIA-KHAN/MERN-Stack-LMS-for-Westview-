import React, {useState, useEffect} from 'react';
import {Button} from "./Button";
import {Link} from "react-router-dom";
import "./Navbar.css";



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => { /*Everytime the pages was reloaded the signup button would show up at the center therefore we used this hook so that the signp button is only rendered once*/
        showButton();
    }, []);

    window.addEventListener("resize", showButton);
    return (
       <> {/*THESE ARE FRAGMENTS REPLACED WITH DIV*/}
       <nav className="navbar">
           <div className="navbar-container">
           <Link to="/" className="banner" onClick = {closeMobileMenu}>
               Westview Junior School 
           </Link>
          
           <div className = "menu-icon" onClick = {handleClick}>
               <i className ={click ? "fas fa-times" : "fas fa-bars"} />
           </div>
           <ul className = {click ? "nav-menu active" : "nav-menu"} >
               <li className = "nav-item">
                   <Link to = "/" className = "nav-links" onClick = {closeMobileMenu} style = {{color: "#F8485E", textDecoration: "none"}}>
                       Home
                   </Link>
               </li>

               <li className = "nav-item">
               <Link to = "/about-us" className = "nav-links about-us" onClick = {closeMobileMenu} style = {{color:"#FF7A00",textDecoration: "none"}}>
                       About Us
                </Link>
               </li>

               <li className = "nav-item">
               <Link to = "/contact-us" className = "nav-links contact-us" onClick = {closeMobileMenu} style = {{color:"#81B214",textDecoration: "none"}}>
                       Contact Us
                </Link>
               </li>

               <li className = "nav-item">
                   <Link to = "/login" className = "nav-links-mobile" onClick = {closeMobileMenu} style = {{color:"#6DDCCF",textDecoration: "none"}}>
                       Sign In
                   </Link>
               </li>
           </ul>
           {button && <Button buttonStyle = "butn--outline">SIGN IN</Button>}
           </div>
       </nav>
       </>
    )
}

export default Navbar

/*rcfe*/