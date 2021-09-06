const express = require('express');
const router = express.Router();

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const MySQLStore = require('express-mysql-session')(session);

const { insertUserinfo, getUserinfo, updateUserinfo } = require('../dbmodule/querys');
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
    // debug_log('serializeUser', param);
    done(null, param);
});

passport.deserializeUser(function(param, done){
    // debug_log('deserializeUser', param);
    
    getUserinfo(param)
    .then(res => {
        let info = { email: res[0].email, pwd: res[0].pwd };
        // debug_log(info);
        
        updateUserinfo(info)
        .then(()=>{
            done(null, param);
        })
        .catch(err => {
            done(err, null);
        });
    })
    .catch(err => {
        done(err, null);
    });
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
            debug_log('success');
            return done(null, user);
        })
        .catch((err) => {
            debug_log(err);
            return done(null, false, {message:'failed'});
        });
    }
));

/* GET users listing. */
router.get('/', function(req, res, next) {
    let isAuth = req.isAuthenticated();
    res.send({isAuthenticated:isAuth});
});

router.post('/login', function(req, res, next){
    if(req.isAuthenticated()) {
        req.logout();
    }
    
    passport.authenticate(
            'local2',
            function(param1, param2, param3) {
                if(param1) {
                    debug_log('param1:', param1);
                    res.send(param1);
                }
                
                if(param2) {
                    debug_log('param2:', param2);

                    req.logIn(param2, function(err){
                        if(err) next(err);
                        else {
                            // debug_log(req);
                            res.send(param2);
                        }
                    });
                } 
                
                if(param3) {
                    debug_log('param3:', param3);
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

router.get('/logout', function(req, res, next) {
    req.logout();
    res.send('logout');
});

router.get('/failed', forwardAuthenticated, function(req, res, next) {
    res.send('login failed');
});

router.get('/success', function(req, res, next) {
    console.log(req);
    res.send('login success');
});

module.exports = router;
