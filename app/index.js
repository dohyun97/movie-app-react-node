const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const {User} = require("./models/User");
const config = require("./config/key");
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser()); 

mongoose.connect(config.mongoURI ,{
    
}).then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));
app.get("/",  (req, res)=>res.send("Hello World!"));

app.post("/register",  async (req, res)=>{
    const user = new User(req.body);
   //userSchema.pre occurs. go to User.js
    const result = await user.save().then(()=>{
        res.status(200).json({
          success: true
        })
      }).catch((err)=>{
        res.json({ success: false, err })
      })
    
});

app.post("/login",async (req,res)=>{
    await User.findOne({email:req.body.email}).then((user)=>{
    
        if(!user){
            return res.json({
                loginSuccess:false,
                message: "No such a user exist"
            });
        }
        user.comparePassword(req.body.password , (err,isMatch)=>{
           
         if(!isMatch){
            return res.json({
                loginSuccess:false,
                message:"Incorrect Password"
            });
         }

         user.generateToken((err,updateUser)=>{
             if(err) return res.status(400).send(err);
             res.cookie("x_auth",updateUser.token).status(200).json({loginSuccess:true, userId:updateUser._id});
         })

        });
    } )
})

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`));

