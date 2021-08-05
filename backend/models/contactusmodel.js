const mongoose=require('mongoose');


const contactSchema=new mongoose.Schema({
   
    contname:{
        type:String,
        required:true,
        minlength:3
    },
    contstatus:{
        type:String,
        minlength:5,
        required:true
    },
    contemail:{
        type:String,
        minlength:6,
        required:true
    },
    contcontact:{
        type:String,
        required:true,
        minlength:2
    },
    contmsg:{
        type:String,
        minlength:10,
        required:true,
    }
}
)


const Contact=new mongoose.model('Contact',contactSchema);


module.exports=Contact;