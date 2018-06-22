import AppDispatcher from '../Dispatcher/AppDispatcher.js';

const AppActions = {

  // Receive inital product data
  // receivePhotos:function(data) {
  //   var data = JSON.parse(localStorage.getItem('photos'));
  //   AppDispatcher.dispatch({
  //     actionType: 'receiveData',
  //     data: data
  //   })
  // },

  // // Set currently selected product variation
  // selectProduct: function (index) {
  //   AppDispatcher.dispatch({
  //     actionType: 'setSelectedPhoto',
  //     data: index
  //   })
  // },


  photoViewerOff: function(){
    AppDispatcher.dispatch({
      actionType: 'photoViewerOff',
    });
  },

  photoViewerOn: function(){
    AppDispatcher.dispatch({
      actionType: 'photoViewerOn',
    });
  },

  signupWindowOff:function(){
    AppDispatcher.dispatch({
      actionType: 'signupWindowOff',
    });
  },


  signupWindowOn: function(){
    AppDispatcher.dispatch({
      actionType: 'signupWindowOn',
    });
  },

  loginWindowOff:function(){
    AppDispatcher.dispatch({
      actionType: 'loginWindowOff',
    });
  },


  loginWindowOn: function(){
    AppDispatcher.dispatch({
      actionType: 'loginWindowOn',
    });
  },

  openUploadWindow: function() {

    AppDispatcher.dispatch({
      actionType: 'toggleUploadWindow',
    });
  },

  closeUploadWindow: function(){

    AppDispatcher.dispatch({
      actionType: 'toggleUploadWindow',
    });
  },


  getHighlights: function(){
    AppDispatcher.dispatch(
      {
        actionType: 'getHighlights',
      }
    );

  },










};

export default AppActions;
