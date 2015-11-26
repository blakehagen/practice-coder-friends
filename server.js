var express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    rp = require('request-promise'),
    passport = require('passport'),
    GithubStrategy = require('passport-github').Strategy,
    port = 4000;

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: 'this is my secret',
    saveUninitialized: true,
    resave: false
}));

app.use(express.static(__dirname + '/public'));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

passport.use(new GithubStrategy({
    clientID: '1e535c456b8b36811723',
    clientSecret: '6141e1003e50911d172d9a0353cd0341d86deaa2',
    callbackURL: 'http://localhost:4000/auth/github/callback'
}, function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
}));

var requireAuth = function (req, res, next) {
    if (!req.isAuthenticated()) {
        return res.status(403).end();
    }
    return next();
}

//AUTH ENDPOINTS //
app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/github/callback', passport.authenticate('github', {
    successRedirect: '/#/home',
    failureRedirect: '/'
}), function (req, res, next) {
    console.log('req.session: ' + req.session);
});

// USER ENDPOINTS //
app.get('/api/github/following', function (req, res, next) {
    console.log('req= ' + req);
    var user = req.user.username;
    var token = req.user.accessToken;
    var options = {
        uri: 'https://api.github.com/users/' + user + '/followers?client_id=1e535c456b8b36811723&client_secret=6141e1003e50911d172d9a0353cd0341d86deaa2',
        headers: {'User-Agent' : user}, 
        params: token,
        json: true
    };
     rp(options).then(function (data) {
            // console.log('data on mainCtrl in SERVER: ' + data)
            res.status(200).json(data)
        })
            .catch(function (err) {
            });
});








app.listen(port, function () {
    console.log('listening on port ' + port);
})