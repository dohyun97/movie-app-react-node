const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const config = require("./src/config/key");
const cookieParser = require("cookie-parser");


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser()); 

mongoose.connect(config.mongoURI ,{
    
}).then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));

const users = require("./src/routes/users");
app.use("/api/user",users); //middleware




module.exports = app;