const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');
require("dotenv").config();

// const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;

var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox-hizuc.mongodb.net/test?retryWrites=true";

MongoClient.connect(uri, { userNewUrlParser: true }, (err, db) => {
	if (err) throw err;
	var dbo = db.db("civitas");

	dbo.collection("highlights").find({}).toArray((err, result) => {
		if (err) throw err;


		app.get('/api/highlights', function(req, res){
			// console.log(req);
			res.send(result);
		});
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
