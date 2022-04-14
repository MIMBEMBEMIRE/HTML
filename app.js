const express = require("express");
const bodyParser = require("body-parser");
const { use } = require("express/lib/application");
const app =express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    
    var today = new Date();
    var currentDay = today.getDay();
    var day=""
    if(currentDay === 6 || currentDay === 0){
    day="wesnesday"
    res.render("list",{wday:day});
    }else{
        res.render("list",{wday :day});
    }

});

    




app.listen(3000,function(){
    console.log("the server is running sucess full")
});
