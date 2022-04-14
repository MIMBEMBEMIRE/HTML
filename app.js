const express = require("express");
const bodyParser = require("body-parser");
const app =express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
var items=["food","manag","soudi"];
var item="";

app.get("/", function(req, res){
    
    var today = new Date();
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    },
    day=today.toLocaleDateString("en-us",options);
    res.render("list",{weekedly:day,newlistitem:items})

});
app.post("/",function(req, res){
    item=req.body.newItem;
   items.push(item);
    
    res.redirect("/");

});
    




app.listen(3000,function(){
    console.log("the server is running sucess full")
});
