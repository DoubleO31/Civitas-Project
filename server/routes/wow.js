var express = require('express');
var router = new express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert'); // used to test mongo connection

var url = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox-hizuc.mongodb.net/test?retryWrites=true";

// not needed
/*
router.get('/get-data', function(req, res, next) {
	mongo.connect(url, function(err, db) {
		assert.equal(null, err);
		var cursor = db.collection('highlights').find();
		cursor.forEach(function(doc, err){
			assert(null, err);
		});	
	});
});
*/

//not needed
/*
router.post('/insert', function(req, res, next) {

});
*/


app.post('/update-inc', function(req, res, next) {
	mongo.connect(url, function(err, db) {
		assert.equal(null, err);
		var dbo = db.db("civitas");
		try {
			db.collection('highlights').updateOne(
			// filter
			{ "_id": req.id}, // !!! need to figure out what the request looks like
			// setter
			{ $inc: {wow: +1} }
			);

			console.log("wowed!");
		} catch (e) {
			print(e);
		}
	});

	res.redirect('/');
});

app.post('/update-dec', function(req, res, next) {
	mongo.connect(url, function(err, db) {
		assert.equal(null, err);
		var dbo = db.db("civitas");
		try {
			db.collection('highlights').updateOne(
			// filter
			{ "_id": req.id}, // !!! need to figure out what the request looks like
			// setter
			{ $inc: {wow: -1} }
			);

			console.log("not wowed..");
		} catch (e) {
			print(e);
		}
	});

	res.redirect('/');
});

/*
router.post('/delete', function(req, res, next) {

});
*/

module.exports = router;