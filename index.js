// const http = require('http');
// http.createServer((req,res)=> {
//     const waiting = new Promise((resolve,reject)=> {
//        resolve('hello12345')
//     })
//     waiting.then((item)=> {
//        res.write(item);
//        res.end()
//     })
//     res.write(';123');
// }).listen('3000');


// const app = require('./app');
// console.log(app);


const express = require('express');
var cors = require('cors')
const app = express(cors());
var path = require('path');
const news = require('./news');
const categories = require('./categories');
const middlware = require('./middleware');
app.use(middlware);
console.log(path.join(__dirname, 'public'))
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/',news);
app.use('/categories',categories);
app.listen('3000');
