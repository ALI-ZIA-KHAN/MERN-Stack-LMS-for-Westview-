import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import {NavLink} from 'react-router-dom';
// import {Route,Switch,Router} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Quiz from "./components/Quiz";
import Quizmath from './components/Quizmaths';
import Quizeng from './components/Quizeng';
import PortalPage from "./components/PortalPage.jsx"

import Modelgen from './components/Modal';
import Student from "./components/pages/Student"
import Admin from "./components/pages/Admin";
import Contactus from "./components/Contactus";
import Aboutus from "./components/Aboutus";
import Errorfourzerofour from './components/Error';

import NotesSection from "./components/NotesSection"

import Uploadfile from './components/Pdfile';

import StudentPortal from "./components/StudentPortal";
import JitsiComponent from './components/jitsi.component';
import ThankYouComponent from './components/thank-you.component';
// import Login from '../components/Login';


function App() {
  return (
    <>
        <Router>
                <Switch>
                <Route path="/" exact component = {Home} />
                {/* <Route path="/sign-up" exact component = {SignUp} /> */}
                 <Route exact path='/dashboard/:id' component={Student}/>
                {/* <Route exact path='/student/:id' component={Student}/>  */}
                 <Route exact path='/login' component={SignUp}/> 


                 <Route exact path='/sign-up' component={SignUp}/> 

                 <Route exact path='/contact-us' component={Contactus}/> 
                 <Route exact path='/about-us' component={Aboutus}/> 
                 {/* <Route exact path='/about' component={Aboutus}/> */}

                <Route exact path="/calling" component={JitsiComponent}/>
                <Route exact path="/thank-you" component={ThankYouComponent}/>

                 <Route exact path='/NotesSection' component={NotesSection}/>


                
                 {/* <Route exact path='/dashboard/:id/studentPortal' component={Student}/>  */}
                 {/* <Route exact path='/student' component={Student}/> */}
                 <Route exact path='/admin/:id' component={Admin}/>
                 
             <Route exact path='/quiz' component={Quiz}/> 
             <Route exact path='/quizmaths' component={Quizmath}/>
             <Route exact path='/quizeng' component={Quizeng}/>


             <Route exact path='/pdfpreview' component={Uploadfile}/>

             <Route exact path='/quizscore' component={Modelgen}/>
             <Route exact path='*' component={Errorfourzerofour}/> 
                </Switch>
        </Router>
    </>
  )
}

export default App

