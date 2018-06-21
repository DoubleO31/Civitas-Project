var AppActions = require('../actions/AppActions');

module.exports = {

	// Load mock product data from localStorage into ProductStore via Action
	getPhotoData: function() {
		var data = JSON.parse(localStorage.getItem('photos'));
		AppActions.receivePhotos(data);
	}

};