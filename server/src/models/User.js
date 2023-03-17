const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        minlength:1,
        maxlength:50,
    },
    email:{
        type:String,
        trim:true,
        minlength:1,
        unique:1,
    },
    password:{
        type:String,
        minlength:5,
    },
    lastname:{
        type:String,
        maxlength:50,
    },
    role:{
        type:Number,
        default:0,
    },
    
    token:{
        type: String,
    }
})

//password bcrypt. It works when modify password or sign up
userSchema.pre("save",function(next){
    var user = this;
    if (user.isModified("password")){
    bcrypt.genSalt(saltRounds,(err,salt)=>{
        if (err) return next(err);
        bcrypt.hash(this.password,salt,(err,hash)=>{
            if(err) return next(err);
            user.password = hash;
            next();
        })})
    }else{
        next();
    }
})

userSchema.methods.comparePassword = function(rawPassword , func){
    bcrypt.compare(rawPassword,this.password, (err,isMatch)=>{
        if(err) return func(err);
        return func(null, isMatch);
    })
}

userSchema.methods.compareEmail = function(email){
     if (this.email === email){
        return false;
     }
    
}

userSchema.methods.generateToken = function(func){
    var user = this;

    var token = jwt.sign(JSON.stringify(user._id), "secretToken");
    
   user.token = token;
    user.save().then(()=>{
        func(null,user);
        }).catch((err)=>{
        func(err);
      })
}

userSchema.statics.findByToken = function(token,func){
    var user =this;
    //decode token. decoded token = user_id
    jwt.verify(token, "secretToken", (err,decoded)=>{
       user.findOne({"token":token})
        .then((user) => func(null,user))
        .catch((err)=>func(err))
    })
} 
    

const User = mongoose.model("User",userSchema);
module.exports = {User};