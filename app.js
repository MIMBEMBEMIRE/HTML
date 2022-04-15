const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const app =express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');


mongoose.connect("mongodb://localhost:27017/dotolistdb",{useNewUrlParser: true});
const itemSchema = {name:String}
const Item = mongoose.model("Items",itemSchema);
const item1 = new Item({name: "welcome to todo list"});
const item2 = new Item({name: "hit the + button to add a new item"});
const item3 = new Item({name: "hit this to delle an item"});

const defautItem=[item1,item2,item3];
/*Item.insertMany(defautItem,function(err){
    if(err){
        
        console.log(err);
    }else{
        console.log("mongo is susscefull");
    }
});*/
app.get("/",function(req, res){

Item.find({},function(err, foundItems){
    if(foundItems.length ===0){

        Item.insertMany(defautItem,function(err){
            if(err){
                
                console.log(err);
            }else{
                console.log("mongo is susscefull");
            }
            res.redirect("/")
        });
    }else{

    res.render("list",{listTitle:"today",newlistitem:foundItems});
    }
});

app.post("/",function(req, res){
    const ItemeName = req.body.newItem;
    const item = new Item({name:ItemeName
    });
    item.save();
    res.redirect("/");
});
app.post("/delete",function(req,res){
    const check= req.body.checkox;
    Item.findByIdAndRemove(check,function(err){
        if(err){
            console.log("succefuly deleted");

        }
        res.redirect("/");
    })

})
});

app.listen(3000,function(){
    console.log("the server is running sucess full")
});