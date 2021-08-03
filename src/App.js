import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import {NavLink} from 'react-router-dom';
// import {Route,Switch,Router} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Quiz from "./components/Quiz";
import PortalPage from "./components/PortalPage.jsx"

import Modelgen from './components/Modal';
import Student from "./components/pages/Student"
import Admin from "./components/pages/Admin";
import Contactus from "./components/Contactus";
import Aboutus from "./components/Aboutus";
import Errorfourzerofour from './components/Error';

import StudentPortal from "./components/StudentPortal";

// import Login from '../components/Login';


function App() {
  return (
    <>
        <Router>
                <Switch>
                <Route path="/" exact component = {Home} />
                {/* <Route path="/sign-up" exact component = {SignUp} /> */}
                 <Route exact path='/dashboard/:id' component={Dashboard}/>
                {/* <Route exact path='/student/:id' component={Student}/>  */}
                 <Route exact path='/login' component={SignUp}/> 
                 <Route exact path='/contact-us' component={Contactus}/> 
                 <Route exact path='/about-us' component={Student}/> 
                 <Route exact path='/about' component={Aboutus}/>
                
                 {/* <Route exact path='/dashboard/:id/studentPortal' component={Student}/>  */}
                 {/* <Route exact path='/student' component={Student}/> */}
                 <Route exact path='/admin/:id' component={Admin}/>
                 
             <Route exact path='/quiz' component={Quiz}/> 
             <Route exact path='/quizscore' component={Modelgen}/>
             <Route exact path='*' component={Errorfourzerofour}/> 
                </Switch>
        </Router>
    </>
  )
}

export default App

