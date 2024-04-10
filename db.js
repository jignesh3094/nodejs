const {MongoClient,ObjectId} = require('mongodb');
const uri = "mongodb+srv://admin:admin@cluster0.ny4riyc.mongodb.net/";
const client = new MongoClient(uri);
const db = client.db("newsapp");
module.exports = {db,ObjectId};




