const express = require('express');
const fs = require('fs');
var MongoClient = require('mongodb').MongoClient;

const app = express();
const port = process.env.PORT || 5000;

var uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox-hizuc.mongodb.net/test?retryWrites=true";

MongoClient.connect(uri, { userNewUrlParser: true }, (err, db) => {
	if (err) throw err;
	var dbo = db.db("Civitas");

	dbo.collection("Highlights").find({}).toArray((err, result) => {
		if (err) throw err;


		app.get('/api/highlights', function(req, res){
			res.send(result);
		});

		app.listen(port, () => console.log(`Listening on port ${port}`));

	})

	
})


