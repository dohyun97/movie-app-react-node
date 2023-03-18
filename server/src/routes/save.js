const express=require("express");
const router = express.Router();
const {Save} = require("../models/Save");

router.post("/checkSaved",async (req, res)=>{
  
await Save.find({ movieId: req.body.movieId, userForm: req.body.userForm })
   .then((movie) => {
       if (movie.length !== 0) {
          return res.status(200).json({success:true,saved:true})
       }else{
      res.status(200).json({ success: true, saved: false })
       }
   }).catch((err)=>res.status(400).send(err))
        
        
     
})
router.post("/add",async (req, res)=>{
   
     const saveAdd= new Save(req.body);
   await saveAdd.save()
     .then(()=>{
  
       res.status(200).json({success:true})
      }).catch((err)=>{
        res.status(400).send(err)
      })
     
     
  
})
router.post("/remove",async (req, res)=>{
   
 await Save.findOneAndRemove({  userForm:req.body.userForm, movieId:req.body.movieId })
   .then(()=>{
     res.status(200).json({success:true})
    }).catch((err)=>{
      res.status(400).send(err)
    })
   
   

})

module.exports=router