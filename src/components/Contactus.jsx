import React from 'react';
import {useState} from 'react';
import './Contactus.css';
import Navbar from "../components/Navbar";
import "../components/Navbar.css";
import {Link} from "react-router-dom";
import axios from 'axios';

function Contactus(){
  
    const [contdata,setContdata]=useState({
        contname:"",
        contstatus:"",
        contemail:"",
        contcontact:"",
        contmsg:"",
    });

const dataFrom=(event)=>{

    const {value,name}=event.target;
      setContdata((preValue)=>{
    
  return{
  ...preValue,
  
  [name]:value,        
  };
  
  })
}
    


    // const dataFromname=(e)=>{
    // //   setContdata({contname:e.target.value})
    // //   console.log(e.target.value)
    // contdata.contname=e.target.value
    // // console.log(contdata.contname)
    // }
    // const dataFromstatus=(e)=>{
    //     contdata.contstatus=e.target.value
    //   }
    //   const dataFromemail=(e)=>{
    //     contdata.contemail=e.target.value
    //   }
    //   const dataFromcontact=(e)=>{
    //     contdata.contcontact=e.target.value
    //   }
    //   const dataFrommsg=(e)=>{
    //     contdata.contmsg=e.target.value
    //   }


   const contact={
    contname:contdata.contname,
    contstatus:contdata.contstatus,
    contemail:contdata.contemail,
    contcontact:contdata.contcontact,
    contmsg:contdata.contmsg,
    
   }





const toCheck=()=>{
    console.log(contact)
}


   const toConfirm=(event)=>{
    event.preventDefault();
    console.log(contact)


    axios.post('https://westviewlms.herokuapp.com/contacts/add', contact)
    .then((res) => {
     console.log(res.data)
     console.log('Message added!!')
     alert("Your message has been delivered")
 }).catch((error) => {
     console.log(error)

 });
 }


    return(

    <>
     <Navbar />
     <Link className = "banner" >WESTVIEW JUNIOR SCHOOL </Link>
      <div className ="container-fluid hello  ">

<div className ="hello_con">
      <img className ="img_con" src="https://eblog.network/wp-content/uploads/2019/04/contact-us-hover.gif" alt=""/>
  </div>











  <section className ="form_con">
      <div className ="row two_things">
          <div className ="col-lg-3 col-md-8 col-sm-12 charac ">
<img className="orange_shirt" src="https://gifimage.net/wp-content/uploads/2018/11/pointing-gif-animation-9.gif" alt=""/>
          </div>


          <div className ="col-lg-7 col-md-8 col-sm-12 contact_form">

      {/* <!-- <div className ="container"> --> */}


      <form onSubmit={toConfirm} >
<div className ="insider">
          <h2 className ="get"> Get In Touch With Us</h2>
          
      <div className ="row100">
          <div className ="col">
              <div className ="inputBox">
                  <span className ="text">Name</span>
                  <input type="text" value={contdata.contname} onChange={dataFrom}   name="contname" required="required"/>
                 
                  <span className ="line"></span>
              </div>
          </div>
          <div className ="col">
              <div className ="inputBox">
                  <span className ="text">Status</span>
                  <input type="text" value={contdata.contstatus} onChange={dataFrom}  name="contstatus" required="required"/>
                  
                  <span className ="line"></span>
              </div>
          </div>
          <div className ="row100">
              <div className ="col">
                  <div className ="inputBox">
                     <span className ="text">Email</span>
                      <input type="text" value={contdata.contemail} onChange={dataFrom}  name="contemail" required="required"/>

                      <span className ="line"></span>
                  </div>
              </div>
              <div className ="col">
                  <div className ="inputBox">
                      <span className ="text">Contact</span>
                      <input type="text" value={contdata.contcontact} onChange={dataFrom}  name="contcontact" required="required"/>

                      <span className ="line"></span>
                  </div>
              </div>
          </div>
      </div>

      <div className ="row100">
          <div className ="col">
              <div className ="inputBox textarea">
                  <span className ="text">Your Message ...</span>
               <textarea value={contdata.contmsg} onChange={dataFrom} name="contmsg" required="required"></textarea>
                  
                  <span className ="line"></span>
              
              </div>
          </div>
      </div>

      <div className ="row100">
          <div className ="col">
              <input type="submit"  value="Send"/>
           {/* <button onClick={toCheck}>To Check</button> */}
              
              </div>
          {/* <!-- </div> --> */}
      </div>
  </div>
</form>

</div>

  </div>

{/* </div> */}


<div className ="waves">
  <svg viewBox="0 0 1250 300">
      <path fill-opacity="0.7" d="
      M0,192
      C220,100,440,100,660,192
      C880,290,1100,290,1320,192
      L1320 500
      L0 500
      " fill="rgb(250, 33, 87)"/>
      <path fill-opacity="0.7" d="
      M0,192
      C220,100,440,100,660,192
      C880,290,1100,290,1320,192
      L1320 500
      L0 500
      " fill="rgb(255, 107, 38)"/>
      <path fill-opacity="0.7" d="
      M0,192
      C220,100,440,100,660,192
      C880,290,1100,290,1320,192
      L1320 500
      L0 500
      " fill="rgb(23, 221, 106)"/>
      <path fill-opacity="0.7" d="
      M0,192
      C220,100,440,100,660,192
      C880,290,1100,290,1320,192
      L1320 500
      L0 500
      " fill="rgb(251, 255, 35)"/>
  </svg>
</div>

  </section>
  

  
  </div>


    </>




    )




}

export default Contactus;

