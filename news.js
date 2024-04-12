const express = require('express');
const router = express();
router.use(express.json());
const uploadFile = require('./uploadfile')

const database = require('./db');
router.get('/', async(req, res) => {
  const table = database.db.collection("news");
  const filter = {};
  if(req.query.category_id ) {
    filter['category_id'] = { $eq: req.query.category_id}
  }
  let skip = 0;
  let pagsize = 0;
  let count  = 0;
   
  if(req.query.page != null && req.query.page != undefined  && req.query.pageSize != null  && req.query.pageSize != undefined) {
         skip = Number(req.query.page)*Number(req.query.pageSize);
         pagsize = Number(req.query.pageSize);
  } else {
    pagsize = count;
  }
  const result = await table.find(filter).skip(skip).limit(pagsize).toArray();
  count =  await table.countDocuments(filter);
  res.send({data: result,totalResults:count});
});
router.post('/', uploadFile,async(req, res) => {
  const table = database.db.collection("news");
  let data = JSON.parse(req.body.data);

  data['image'] = req.file ? req.file.originalname: null;
   await table.insertOne(data);
   res.send({success: true,data: data});
});
router.delete('/:id', async(req, res) => {
  const table = database.db.collection("news");
  let id = req.params.id;
  await table.deleteOne({"_id":new database.ObjectId(id)});
  res.send(id);
});
router.put('/', async(req, res) => {
   const table = database.db.collection("movies");
   await table.updateOne({"_id":new database.ObjectId(req.body._id)},{$set: {name: req.body.name,test:req.body.test } })
   res.send(req.body);
});
router.patch('/', async(req, res) => {
  const table = database.db.collection("movies");
  await table.updateOne({"_id":new database.ObjectId(req.body._id)},{$set: {test:req.body.test } })
  res.send(req.body);
});
router.post('/contactus', (req, res) => {
  res.send(req.body);
});




module.exports = router;