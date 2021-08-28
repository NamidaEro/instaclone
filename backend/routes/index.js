const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:1q2w3e4r@clusterzero.ucszf.mongodb.net/cinstagram?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.connect(uri, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// });

// const db = mongoose.connection;
// db.on("error", (err) => console.error(err));
// db.once("open", () => console.log("데이터베이스 연결 성공"));

MongoClient.connect(uri)
.then(client => {
    console.log('mongo connected');
    let collection = client.db('cinstagram').collection('users');
    console.log(collection);
})
.catch(console.log);

/* GET home page. */
router.get('/', function(req, res, next) {
    
    res.render('index', { title: 'Express' });
});

module.exports = router;
