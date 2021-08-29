const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');

// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
const session = require('express-session'), LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const MySQLStore = require('express-mysql-session')(session);

// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: false }));
router.use(session({
    secret: 'asadlfkj!@#!@#dfgasdg',
    resave: false,
    saveUninitialized: true,
    store: new MySQLStore({
        host:'localhost',
        port: 3306,
        user: 'yui',
        password: '1q2w3e4r',
        database: 'cinstagram'
    }),
}));
router.use(passport.initialize());
router.use(passport.session());

const sql = require('./sqlconnection.js');

/* GET home page. */
router.post('/', async function(req, res, next) {
    let userinfo = req.body;

    sql.executeQuery('select * from users')
    .then(console.log)
    .catch(console.log);

    res.send(userinfo);
});

router.post('/Signup', function(req, res, next) {
    let email = req.body.email;
    let username = req.body.name;
    let password = req.body.pwd;

    let query = `call InsertUser('${email}','${username}','${password}')`;

    console.log(query);

    sql.executeQuery(query)
    .then(qres => {
        res.send(qres[0]);
    })
    .catch(res.send);
});

module.exports = router;
