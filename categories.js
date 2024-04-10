const express = require('express');
const categories = express();
const database = require('./db');
const collection = database.db.collection("categories");
  
categories.get('/',async(req,res)=> {
    const result = await collection.find().toArray();
   const count= await collection.countDocuments();
    res.send({data: result, total: count});
})

categories.post('/',async(req,res)=> {
    let data = req.body;
    await collection.insertMany(data);
    res.send(data);
})

module.exports = categories;
