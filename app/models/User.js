const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength:50,
    },
    email:{
        type:String,
        trim:true,
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
    image: String,
    token:{
        type: String,
    },
    tokenExp:{
        type:Number,
    },
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

userSchema.methods.generateToken = function(func){
    var user = this;

    var token = jwt.sign(JSON.stringify(user._id), "secretToken");
    
   
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
        user.findOne({"_id": decoded, "token": token})
        .then((user) => func(null,user))
        .catch((err)=>func(err))

    })
} 


const User = mongoose.model("User",userSchema);
module.exports = {User};
