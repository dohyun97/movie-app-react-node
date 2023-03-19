const express=require("express");
const router = express.Router();
const {Comment} = require("../models/Comment");

router.post("/add",async (req, res)=>{
     
    const commentAdd= new Comment(req.body);
  await commentAdd.save()
    .then(()=>{
      
      res.status(200).json({success:true})
     }).catch((err)=>{
       res.status(400).send(err)
     })
    
    
 
})

router.post("/list",async (req,res)=>{
        
    await Comment.find({movieId: req.body.movieId})
       .then((list) => {
          if (list.length !== 0) {
              return res.status(200).json({success:true,commentList: list})
           }else{
          res.status(200).json({ success: true, commentList:false})
           }
       }).catch((err)=>res.status(400).send(err))
            
            
})

router.post("/edit", async (req,res)=>{
    await Comment.findByIdAndUpdate(req.body.id,{content:req.body.content})
    .then(()=>{
       return res.status(200).json({success:true})
    }).catch((err)=>res.status(400).send(err))
})

router.delete("/delete", async (req,res)=>{
    
    await Comment.findByIdAndDelete(req.body.id)
    .then(()=>{
        return res.status(200).json({success:true})
     }).catch((err)=>res.status(400).send(err))
})


module.exports=router