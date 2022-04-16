const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();


app.use(bodyParser.urlencoded({extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');
mongoose.connect("mongodb://localhost:27017/todolistDB1",{useNewUrlParser: true});
const itemSchema = {
    name:String,
}
const Item = new mongoose.model("Item10",itemSchema);
const item1 = new Item({name:"welcomw to mongo"});
const item2 = new Item ({name:"thank you very much"});
const item3 = new Item({name:"thank you every one "})
const defaultItem =[item1,item2, item3];

app.get("/",function(req, res){

    Item.find({},function(err, foundItems){
        if(foundItems.length ===0){
    
            Item.insertMany(defaultItem,function(err){
                if(err){
                    console.log(err);
                }else{
                    console.log("mongo is susscefull");
                }
                res.redirect("/")
            });
        }else{
            res.render("list",{listTitle:"Today",newlist1:foundItems});
    
        }
    });

});    
   





                

    








app.listen(3000,function(){
    console.log("the server is running sucess full")
});