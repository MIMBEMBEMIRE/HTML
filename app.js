const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Stoks", {
    useNewUrlParser: "true"});

console.log("suscess");
const stokSchema = new mongoose.Schema({name:{type:String,required:[true,"please enter the name"]},rating:{type:Number,min:1,max:10}, review:String});

const prod = mongoose.model("produi",stokSchema)
const prod1 = new prod({rating:4,review:"aimer"});


const personneShema = new mongoose.Schema({name:String,age:Number,addresse:String});
const perso = mongoose.model("personnes", personneShema);
const personna = new perso({name:"mirayessa",age:7,addresse:"chelikere"});

const personel = new perso({name:"mimbembe",age:2,addresse:"kananga",});

const personne1 = new perso({name:"mim",age:4,addresse:"kananga",});

perso.insertMany([personna,personel,personne1,] ,function(err){
    if(err){
        console.log("err")
    }else{
        console.log("succesfully");
    }

});
perso.updateOne({id:"625690a8f1b80d03c7a4afcb"},{name:"pink"},function(err){
    if(err){
        console.log(err);
    }else{
        console.log("success");
    }
});
perso.deleteOne({name:"pink"},function(err){
    if(err){
        console.log("err")
    }else{
        console.log("sucess deleted;")
    }
});