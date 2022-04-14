const express = require("express");
const bodyParser = require("body-parser");
const { use } = require("express/lib/application");
const app =express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    
    var today = new Date();
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    },
    day=today.toLocaleDateString("en-us",options);
    res.render("list",{weekedly:day})

});

    




app.listen(3000,function(){
    console.log("the server is running sucess full")
});
