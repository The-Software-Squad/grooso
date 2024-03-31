const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure uniqueness of email
        trim: true, // Trim whitespace
        lowercase: true, // Convert email to lowercase
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] // Validate email format
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true, // Ensure uniqueness of phone number
        trim: true, // Trim whitespace
        validate: {
            validator: function (v) {
                // Validate phone number format using regex
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number! Please enter phone number in format XXX-XXX-XXXX`
        }
    },
    refreshToken: {
        type: String,
        default: ""
    }
}, { timestamps: true })


const userModel = mongoose.model("user", userSchema);
module.exports = userModel;