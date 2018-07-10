const express = require('express');
const fs = require('fs');

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

    app.listen(port, () => console.log(`Listening on port ${port}`));
});

