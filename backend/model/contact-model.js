import mongoose from "mongoose";

const contactSchema=new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    subject:{
        type:String
    },
    message:{
        type:String
    },
});

const Contact=new mongoose.model("contact",contactSchema)

export default Contact;