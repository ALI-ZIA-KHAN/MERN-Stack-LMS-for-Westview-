import $ from "jquery";
import {useParams,useLocation} from 'react-router-dom';
import axios from 'axios';
import React, {useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import "./StudentPortal.css";
import Navbar from "./Navbar"


export default function PortalPage(props) {


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


    
       

           axios.get('http://localhost:7781/users/'+_id).then(
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





            axios.get('http://localhost:7781/teachers/'+_id).then(
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








            axios.get('http://localhost:7781/students/'+_id).then(
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


const [code, setCode] = useState("");
  const [portal, setPortal] = useState("");
  function handleChange(event) {
    const value = event.target.value;
    setCode(value);
  }

  function handleClick() {
    if (code === "teacher") {
      setPortal("/teacher");
    } else if (code === "student") {
      setPortal("/student");
    } else if (code === "admin") {
      setPortal("/admin");
    }
  }
  
return (
  

  <div>
    <div className = "BgP"></div>
      <Navbar />
      <h1>{status} Portal</h1>
    <p class = "typing">HELLO {name}! Welcome</p><br/>
    <p >Please Enter the Code to access your Portal</p>
    <div class="hiders">
    <p>&nbsp;</p>
    <p>&nbsp;</p>
  </div>
  <div className = "inputArea">
 <i class = "fa fa-key"></i><input className = "input" type="password" placeholder = "****" value={code} onChange={handleChange} required />

<a style = {{color:"rgb(228, 72, 72)", textDecoration:"none"}} className="nextBtn btn" onClick={handleClick} href={portal}>
  NEXT
</a>
</div>
  </div>
)
}