const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const url ="mongodb://localhost:27017";
const dbname = "Fruitdb";
const client =new MongoClient(url);
client.connect(function(err){
    assert.equal(null, err);
    console.log("connected succesfully to server");
    const db = client.db(dbname);
    client.close();
});