var mongo=require("mongodb").MongoClient
var mongoclient=mongo.MongoClient;
var url="mongodb://localhost:27017/test"
mongoclient.connect(url,function(err,db)
{
console.log("connected to",url)
var collection=db.collection("apples")
var doc1={"name":"red apples","color":"red"}
var doc2={"name":"red apples","color":"red"}	
collection.insert([doc1,doc2],function(err,res)
{
console.log(res.insertedCount)
})
db.close();
})	

console.log(mongoclient)