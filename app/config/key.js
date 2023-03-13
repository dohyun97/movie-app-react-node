if (process.env.NOD_ENV === "production"){
    module.exports = require("./prod");
}else{
    module.exports = require("./dev"); 
}