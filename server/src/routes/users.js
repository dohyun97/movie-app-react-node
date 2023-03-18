const express=require("express");
const router = express.Router();
const {User} = require("../models/User");
const auth = require("../middleware/auth");



router.post("/register",  async (req, res)=>{
    const user = new User(req.body);
   //userSchema.pre occurs. go to User.js
    await user.save().then(()=>{
        res.status(200).json({
          success: true
        })
      }).catch((err)=>{
        if (!user.compareEmail(req.body.email)){
           res.json({ success: false, msg: "Email already exsits" });
        }else{
        res.json({ success: false });
        }
      })
    
});

router.post("/login",async (req,res)=>{
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

router.get("/auth",auth,(req,res)=>{
   
      //if auth(middleware) is not true cannot come here 

   res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image
   })
})

router.post("/findUser",  (req,res)=>{
       
  User.findById(req.body.id)
    .then((user)=>{
        res.status(200).json({
            success: true,
            userInfo: user
        })
    }).catch((err)=>res.status(500).send(err))
})

router.post("/logout", auth, (req,res)=>{

    User.findByIdAndUpdate(req.user._id, {token:""})
    .then(()=>res.status(200).json({
        success:true,
    })).catch((err)=>res.json({
        success:false,
        error: err
    }));
})



module.exports= router;