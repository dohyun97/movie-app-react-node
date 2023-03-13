const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const {User} = require("./models/User");
const config = require("./config/key");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect(config.mongoURI ,{
    
}).then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));
app.get("/",  (req, res)=>res.send("Hello World!"));

app.post("/register",  async (req, res)=>{
    const user = new User(req.body);
    console.log(user);
    const result = await user.save().then(()=>{
        res.status(200).json({
          success: true
        })
      }).catch((err)=>{
        res.json({ success: false, err })
      })
    
});

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`));

