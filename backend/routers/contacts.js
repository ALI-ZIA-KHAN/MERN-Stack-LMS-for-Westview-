const express=require('express');
const app=express();
const router=new express.Router();
let Contact = require('../models/contactusmodel.js');



router.route('/').get((req,res)=>{
    Contact.find()
    .then(studata=>res.json(studata))
    .catch(err=>res.status(400).json('Error: ' + err));
})





router.route('/:id').get((req,res)=>{
    Contact.findById(req.params.id)
    .then(studata=>res.json(studata))
    .catch(err=>res.status(400).json('Error: ' + err))
  });
  
    
router.route('/add').post((req,res)=>{
   

 const   contname=req.body.contname;
 const  contstatus=req.body.contstatus;
 const   contemail=req.body.contemail;
 const  contcontact=req.body.contcontact;
 const    contmsg=req.body.contmsg;
 

    const newCont= new Contact({
        contname,
     contstatus,
    contemail,
   contcontact,
       contmsg
      })
    
      newCont.save()
      .then(() => res.json('Message added!'))
      .catch(err => res.status(400).json('Error: ' + err));
    });
    


    







module.exports=router;


