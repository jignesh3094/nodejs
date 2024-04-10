const {MongoClient,ObjectId} = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const db = client.db("newsapp");
module.exports = {db,ObjectId};




