var express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
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
},
    function (accessToken, refreshToken, profile, done) {
        // user = profile;
        // user.accessToken = accessToken;
        // user.refreshToken = refreshToken;
        return done(null, profile);
    }
));

app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/github/callback', passport.authenticate('github', {
    successRedirect: '/home',
    failureRedirect: '/'
    }), function (req, res, next) {
        console.log(req.session);
    }
);








