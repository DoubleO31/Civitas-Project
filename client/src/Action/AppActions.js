import AppDispatcher from '../Dispatcher/AppDispatcher.js';

const AppActions = {

  setSelectedPhoto: function(obj) {
    AppDispatcher.dispatch({actionType: 'setSelectedPhoto', data: obj});
  },

  wowIncrement: function(wowed, count) {
    console.log('wowincrement called');
    AppDispatcher.dispatch({
      actionType: 'wowIncrement',
      data: [wowed, count]
    });
  },

  wowDecrement: function(wowed, count) {
    console.log('wowdecrement called');
    AppDispatcher.dispatch({
      actionType: ' wowDecrement',
      data: [wowed, count]
    });
  },

  photoViewerOff: function() {
    AppDispatcher.dispatch({actionType: 'photoViewerOff'});
  },

  photoViewerOn: function() {
    AppDispatcher.dispatch({actionType: 'photoViewerOn'});
  },

  signupWindowOff: function() {
    AppDispatcher.dispatch({actionType: 'signupWindowOff'});
  },

  signupWindowOn: function() {
    AppDispatcher.dispatch({actionType: 'signupWindowOn'});
  },

  loginWindowOff: function() {
    AppDispatcher.dispatch({actionType: 'loginWindowOff'});
  },

  loginWindowOn: function() {
    AppDispatcher.dispatch({actionType: 'loginWindowOn'});
  },

  openUploadWindow: function() {

    AppDispatcher.dispatch({actionType: 'toggleUploadWindow'});
  },

  closeUploadWindow: function() {

    AppDispatcher.dispatch({actionType: 'toggleUploadWindow'});
  },

  getHighlights: function() {
    AppDispatcher.dispatch({actionType: 'getHighlights'});

  },

  logout: function() {
    AppDispatcher.dispatch({actionType: 'logout'});
  },

  saveuserinfo: function(obj) {
    AppDispatcher.dispatch({actionType: 'setUserinfo', data: obj});
  },

  updatehighlights: function() {
    AppDispatcher.dispatch({actionType: 'updatehighlights'});
  },

  GPSViewerOff: function() {
    AppDispatcher.dispatch({actionType: 'GPSViewerOff'});
  },

  GPSViewerOn: function(lat, long) {
    AppDispatcher.dispatch({
      actionType: 'GPSViewerOn',
      data: [lat, long]
    });
  }
};

export default AppActions;
