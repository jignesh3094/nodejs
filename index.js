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
const app = express();
const news = require('./news');
const categories = require('./categories');
const middlware = require('./middleware');
app.use(middlware);
app.use('/',news);
app.use('/categories',categories);
app.listen('3000');
