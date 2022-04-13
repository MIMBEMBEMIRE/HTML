const MongoClient =require("mongodb").MongoClient;
const assert = require("assert");
const url ="mongodb://localhost:27017";
const dbname = "Fruitdb";

const client =new MongoClient(url, {useNewUrlParser:true});
client.connect(function(err){
    assert.equal(null, err);
    console.log("connected succesfully to server");
    const db = client.db(dbname);
    InsertDocument(db,function(){

    client.close();
    });
});
const InsertDocument = function(db,callback){
const collection = db.collection('fruits');

collection.insertMany([
    {name:"Apple",score:8,review:"Great fruit"},
    {name:"orage",score:6,review:"kinda sour"},
    {name:"mango",sore:7,review:"mirayesa" }

], function(err,result){
    assert.equal(err, null);
    assert.equal(3,result.result.n);
    assert.equal(3,result.ops.length);
    console.log("Insert 3 document into collection");
    callback(result);
});
};


