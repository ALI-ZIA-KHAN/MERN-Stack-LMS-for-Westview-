import StudentPortal from "../StudentPortal"
import Navbar from "../Navbar"
import {useParams,useLocation} from 'react-router-dom';
import axios from 'axios';
import React, {useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import "../Navbar.css";

import Dashboard from "../Dashboard";

function Student(props) {
  
/**No need of student.jsx */
/**All done with dashboard */
var location =useLocation();
    const _id=[location.pathname.slice(11)]
     console.log(_id)
  console.log(props.location.toSend)

const [name,setName]=useState("");
const [noofsubj,setNoofsubj]=useState("");
const [status,setStatus]=useState("");
const [grade,setGrade]=useState("")
const [school,setSchool]=useState("Westview School")

const [studdata,setStuddata]=useState({})



useEffect(() => {


    
       

           axios.get('https://westviewlms.herokuapp.com/users/'+_id).then(
              (resadm)=>{
                console.log("adminresponse "+ JSON.stringify(resadm.data))
                if(resadm!=null){
                  setName(
                    resadm.data.username
                   ) 
                   console.log(name)
                   setStatus(
                    resadm.data.password
                   ) 
                  console.log(status)
                }
   
             }).catch((err)=>{
              console.log("err is " + err)
            })





            axios.get('https://westviewlms.herokuapp.com/teachers/'+_id).then(
              (resteach)=>{
                console.log("teachrrs response "+ JSON.stringify(resteach.data))
              if(resteach!=null){
                setName(
                  resteach.data.teachname
                 ) 
                 console.log(name)
                 setNoofsubj(
                  resteach.data.teachsubjects
                 ) 
                 console.log(noofsubj)
                 
                 setStatus(
                  resteach.data.status
                 ) 

                 console.log(status)

              }

             }).catch((err)=>{
              console.log("err is " + err)
            })








            axios.get('https://westviewlms.herokuapp.com/students/'+_id).then(
              (resstu)=>{
                console.log("students response " + JSON.stringify(resstu.data))

                setName(
                  resstu.data.studname
                 ) 
                 console.log(name)
                 setNoofsubj(
                  resstu.data.studsubjects
                 ) 
                 console.log(noofsubj)
                 setGrade(
                  resstu.data.studgrade
                 ) 
                 console.log(grade)
                 setStatus(
                  resstu.data.status
                 ) 

                 console.log(status)




             }).catch((err)=>{
              console.log("err is " + err)
            })



//     axios.get('http://localhost:7785/users/'+id).then(
//       (resadm)=>{                                            // ( { { ( { { ( { } ) } } ) } )
//         console.log("admin response "+ resadm.data)
//        if(resadm==null){
           
//         axios.get('http://localhost:7785/teachers/'+id).then(
//           (resteach)=>{;
//             console.log("teacher response "+ resteach.data)
//           if(resteach==null){
           

//             axios.get('http://localhost:7785/students/'+id).then(
//               (resstu)=>{
//                 console.log("students response "+ resstu.data)
//              }).catch((err)=>{
//               console.log("err is " + err)
//             })

//        }
        
//         // setName(res.data.studname);
//         // setStatus(res.data.status);
       
//       }).catch((err)=>{
//         console.log("err is " + err)
//       })
    
// }
//  }).catch((err)=>{
//    console.log("err is " + err)
//  }),[]
})


  return (
    <div>
       <div className = "portalBg"></div>
      <Navbar />
      {/* <StudentPortal /> */}
      <StudentPortal Name = {name} Grade = {grade} Status = {status}/>

     
    </div>
  )
}

export default Student;