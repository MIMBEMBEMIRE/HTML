const express = require("express");
const bodyParser = require("body-parser");
const app =express();

app.get("/", function(req,res){
    var today = new Date();
    var current = today.getDay();
     if( current === 6 || current===0)
    {
        res.send("hello")
    }else{
        res.send("hi");
    }


});


app.listen(3000,function(){
    console.log("the server is running sucess full")
});
