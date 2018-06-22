module.exports = {
    // Load Mock Product Data Into localStorage
    init: function() {
        localStorage.clear();
        localStorage.setItem('photos', JSON.stringify(require('./client/src/highlights.json')
        ));
    }

};