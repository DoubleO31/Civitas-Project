module.exports = {
	init: function () {
	localStorage.clear();
	localStorage.setItem('photos', JSON.stringify(require('highlights.json')));
	}
};