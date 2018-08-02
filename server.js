const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');
const Multer = require('multer');
const memoryStorage = require('multer');
const storage = require('@google-cloud/storage');
var path = require('path');
const router = express.Router();
const imgUpload = require('./imgUpload');


const app = express();
const port = process.env.PORT || 5000;

var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox-hizuc.mongodb.net/test?retryWrites=true";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

MongoClient.connect(uri, { userNewUrlParser: true }, (err, db) => {
	if (err) throw err;
	var dbo = db.db("civitas");

	dbo.collection("highlights").find({}).toArray((err, result) => {
		if (err) throw err;
		app.get('/api/highlights', function(req, res){
			res.send(result);
		});
	});

	app.post('/mongodbupload', function(request, response, next) {
		const data = request.body;
		console.log(data);
		dbo.collection("highlights").insertOne(data, function(err, res) {
			if (err) throw err;
		});
	});

	app.post('/usersinfo', function(request, response, next) {
		const data = request.body;
		console.log(data);
		dbo.collection("users").find({email: data.email}).toArray((err, result) => {
			if (err) throw err;
			response.send(result);
		});
	});

	app.post('/mongodbIncWow', function(request, response, next) {
		var objid = require('mongodb').ObjectID(request.body.id);
		// console.log("getting ready to wow" + objid);
		dbo.collection("highlights").updateOne(
			{"_id": objid},
			{ $inc: {"wow": +1}}
			);

		// console.log("wowed " + objid);
	});

	app.post('/mongodbDecWow', function(request, response, next) {
		var objid = require('mongodb').ObjectID(request.body.id);
		// console.log("getting ready to unwow" + objid);
		dbo.collection("highlights").updateOne(
			{"_id": objid},
			{ $inc: {"wow": -1}}
			);

		// console.log("unwowed " + objid);
		
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




//UploadWindow
const multer = Multer({
	storage: Multer.MemoryStorage,
	fileSize: 5 * 1024 * 1024
});

// Process the file upload and upload to Google Cloud Storage.
app.post('/upload', multer.single('image'), imgUpload.uploadToGcs, function(request, response, next) {
	const data = request.body;
	if (request.file && request.file.cloudStoragePublicUrl) {
		data.imageUrl = request.file.cloudStoragePublicUrl;
	}
	response.send(data);
});


app.listen(port, () => console.log(`Listening on port ${port}`));
