const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/livraison",{useNewUrlParser: true});
console.log("server connected successfully");

const livraisonSchema = new mongoose.Schema({name:String,time:Number,periode:String});
const Produit = new mongoose.model("produit", livraisonSchema);
const pro2 = new Produit({name:"banane",time:2,periode:"mars"});

const pro3 = new Produit({name:"potatos",time:4,perode:"mais"});
const pro4  = new Produit({name:"alcol",time:5,perode:"avril"})

Produit.insertMany([pro2,pro3,pro4],function(err){
    if(err){
        console.log("err");
    }else{
        console.log("success");
    }
});
Produit.find(function(err){
    if(err){
        console.log(err)
    }else{
        console.log(pro2.name)
        console.log(pro3.time);
    }
});