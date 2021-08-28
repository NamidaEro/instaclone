const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');

// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
const passport = require('passport');
const MySQLStore = require('express-mysql-session')(session);
const session = require('express-session'), LocalStrategy = require('passport-local').Strategy;

// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: false }));
router.use(session({
    secret: 'asadlfkj!@#!@#dfgasdg',
    resave: false,
    saveUninitialized: true,
    store: new MySQLStore({
        host:'localhost',
        port: 3306,
        user: 'root',
        password: '1234',
        database: 'todo'
    }),
  }));
router.use(passport.initialize());
router.use(passport.session());

// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://admin:1q2w3e4r@clusterzero.ucszf.mongodb.net/cinstagram?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.connect(uri, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// });

// const db = mongoose.connection;
// db.on("error", (err) => console.error(err));
// db.once("open", () => console.log("데이터베이스 연결 성공"));

// MongoClient.connect(uri)
// .then(client => {
//     console.log('mongo connected');
//     let collection = client.db('cinstagram').collection('users');
//     console.log(collection);
// })
// .catch(console.log);

/* GET home page. */
router.get('/', function(req, res, next) {
    
    res.render('index', { title: 'Express' });
});

module.exports = router;
