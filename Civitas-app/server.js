const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');

const app = express();
const port = process.env.PORT || 5000;

fs.readFile('./highlights.json', (err, data) => {
	if (err) {
		throw err;
	}

    //var config = JSON.parse(data);

    app.get('/api/highlights', function(req, res){
    	res.send(data);
    });
});

// connect to the database and load models
require('./server/models').connect(config.dbUri);

// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
//app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
//app.use('/api', apiRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));
