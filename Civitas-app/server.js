const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send(	{
		"src": "highlights/1.jpg",
		"title": "Day 1: Short Title",
		"desc": "Stanley Park, QE Park, Richmond Oval, Chinatown, Metrotown, UBC 1",
		"href": "#"
	});
});

app.listen(port, () => console.log(`Listening on port ${port}`));