const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Stoks", {
    useNewUrlParser: "true"});

console.log("suscess");
const stokSchema = new mongoose.Schema({name:String,rating:Number,review:String});

const prod = mongoose.model("produi",stokSchema);
const prod1 = new prod({name:"mireille",rating:1,review:"aimer"});


const personneShema = new mongoose.Schema({name:String,age:Number,addresse:String});
const perso = mongoose.model("personnes", personneShema);
const personna = new perso({name:"mirayessa",age:23,addresse:"chelikere"});

const personel = new perso({name:"mimbembe",age:33,addresse:"kananga",});

const personne1 = new perso({name:"mim",age:42,addresse:"kananga",});

perso.insertMany([personna,personel,personne1,] ,function(err){
    if(err){
        console.log("err")
    }else{
        console.log("succesfully");
    }

});

