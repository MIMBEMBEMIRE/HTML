const express = require("express");
const bodyParser = require("body-parser");
const app =express();

app.get("/", function(req, res){
    
    var today = new Date();
    if(today.getDay() === 6 || today.getDay() === 0){
        res.send("tday is a weeks");
    } else{
        res.send("toda is a working days");
    }
});
    




app.listen(3000,function(){
    console.log("the server is running sucess full")
});
