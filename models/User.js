const mongoose = require("mongoose")
const {Schema} = mongoose
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const {isEmail} = require('validator')

const userSchema = Schema({
    username: {
        type: String,
        // required: [true, "A username is required"],
        trim: true,
      },
      email: {
        type: String,
        required: [true, "Please provide email"],
        unique: true,
        lowercase: true,
        trim: true,
        validator: [isEmail, "Invalid email"]
  
      },
      firstname: {
        type: String,
        trim: true,
      },
      lastname: {
        type: String,
        trim: true,
      },
     
      password: {
        type: String,
        min: 6,
        select: false,
        required:[true, "Please, provide a password"]
      },
    
      status: {
        type: String,
        default: "pending",
      },
      resetPasswordToken: { type: String },
      resetPasswordExpires: { type: Date },
    },
  
    {
      timestamps: true,
      toJSON: { virtuals: true }, // this tells Mongoose to output the virtuals as part of data sent on GET method
      toObject: { virtuals: true }, // this tells Mongoose to output the virtuals as part of data sent on GET method
    }
  );


//SENDBACK THE USER OBJECT TO THE CLIENT WITHOUT THE USER PASSWORD
userSchema.methods.toJSON = function(){
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    return userObject;
  }



module.exports = mongoose.model("AzureUser", userSchema)
//clicktodeliver2022