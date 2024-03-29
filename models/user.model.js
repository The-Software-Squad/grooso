const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    role:{
        type:String,
        default: 'user'
    },
    email:{
        type: String,
        required: true
    },
    hashedPassword:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    }
}, { timestamps: true })


const userModel = mongoose.model("user", userSchema);
module.exports = userModel ;