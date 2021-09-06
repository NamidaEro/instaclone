const express = require('express');
const router = express.Router();

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const MySQLStore = require('express-mysql-session')(session);

const { insertUserinfo, getUserinfo } = require('../dbmodule/querys');
const { debug_log } = require('../config/debug');


router.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure:false
    },
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

passport.serializeUser(function(param, done){
    debug_log('serializeUser', param);
    done(null, param);
});

passport.deserializeUser(function(param, done){
    debug_log('deserializeUser', param);
    done(null, param);
});

passport.use('local2', new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'pwd',
    },
    function(param1, param2, done) {
        debug_log('LocalStrategy func', param1, param2);

        const user = { email:param1, pwd:param2 };

        getUserinfo(user)
        .then((queryResult) => {
            return done(null, user);
        })
        .catch((err) => {
            return done(null, false, {message:'failed'});
        });
    }
));

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('?');
});

router.post('/login', function(req, res, next){
    // console.log('post login: ', req.body);
    // passport.authenticate(
    //     'local2',
    //     {
    //         successRedirect:'/user/success',
    //         failureRedirect:'/user/failed',
    //         failureFlash:true
    //     }
    // )(req, res, next);
    passport.authenticate(
        'local2',
        function(param1, param2, param3) {
            if(param1) {
                // console.log('param1:', param1);
                res.send(param1);
            }
            
            if(param2) {
                // console.log('param2:', param2);
                req.logIn(param2, function(err){
                    if(err) next(err);
                    else res.send(param2);
                });
            } 
            
            if(param3) {
                // console.log('param3:', param3);
                res.send(param3);
            }
        }
    )(req, res, next);
});

router.post('/signup', function(req, res, next) {
    let userinfo = {
        email: req.body.email,
        username: req.body.username,
        pwd: req.body.pwd
    };
    // console.log(req.body);

    insertUserinfo(userinfo)
    .then((param) => {
        debug_log(param);
        if(0 < param[0].length)
        {
            res.send(param[0]);
        }
        else
        {
            res.send('failed')
        }
        
    })
    .catch((err) => {
        res.send(err);
    });
});

router.get('/failed', forwardAuthenticated, function(req, res, next) {
    res.send('login failed');
});

router.get('/success', function(req, res, next) {
    console.log(req);
    res.send('login success');
});

module.exports = router;
