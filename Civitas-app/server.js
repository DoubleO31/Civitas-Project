const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send(	
  	[{
		"src": "highlights/2.jpg",
		"title": "Day 2: Longer title With More Words",
		"desc": "Stanley Park, QE Park, Richmond Oval, Chinatown, Metrotown, UBC 2",
		"href": "#"
	},

	{
		"src": "highlights/3.jpg",
		"title": "Day 3: Medium title Words",
		"desc": "Stanley Park, QE Park, Richmond Oval, Chinatown, Metrotown, UBC 3",
		"href": "#"
	},
	
	{
		"src": "highlights/4.jpg",
		"title": "Day 3: Medium title Words",
		"desc": "Stanley Park, QE Park, Richmond Oval, Chinatown, Metrotown, UBC 3",
		"href": "#"
	}]

  	);
});

app.listen(port, () => console.log(`Listening on port ${port}`));