const express = require('express');
const router = express.Router();

const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const MySQLStore = require('express-mysql-session')(session);

router.use(session({
    secret: 'secret',
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

passport.serializeUser(function(param, done){
    console.log('serializeUser', param);
    done(null, param);
});

passport.deserializeUser(function(param, done){
    console.log('deserializeUser', param);
    done(null, param);
});

passport.use('local2', new LocalStrategy(
    {
        usernameField: 'id',
        passwordField: 'pwd'
    },
    function(param1, param2, done) {
        console.log('LocalStrategy func', param1, param2);
        // DB 검색후 done 호출
        return done(null, {message:'success'});
    }
));

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('?');
});

router.post('/login', function(req, res, next){
    console.log('post login: ', req.body);
    // passport.authenticate(
    //     'local2',
    //     {
    //         successRedirect:'/success',
    //         failureRedirect:'/failed',
    //         failureFlash:true
    //     }
    // )(req, res, next);
    passport.authenticate(
        'local2',
        function(param1, param2, param3) {
            if(param1) console.log('param1:', param1);
            if(param2) console.log('param2:', param2);
            if(param3) console.log('param3:', param3);

            req.logIn(param2, function(err){
                if(err) next(err);
                else res.send(param2);
            });
        }
    )(req, res, next);
});

router.get('/failed', function(req, res, next) {
    res.send('login failed');
});

router.get('/success', function(req, res, next) {
    res.send('login success');
    
});

module.exports = router;
