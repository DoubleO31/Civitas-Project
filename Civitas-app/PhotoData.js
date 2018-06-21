module.exports = {
    // Load Mock Product Data Into localStorage
    init: function() {
        localStorage.clear();
        localStorage.setItem('photos', JSON.stringify([{
                "src": "highlights/1.jpg",
                "title": "Day 1: Short Title",
                "desc": "Stanley Park, QE Park, Richmond Oval, Chinatown, Metrotown, UBC 1",
                "href": "#"
            }]
        ));
    }

};