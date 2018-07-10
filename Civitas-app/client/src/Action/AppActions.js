import AppDispatcher from '../Dispatcher/AppDispatcher.js';

const AppActions = {

  setSelectedPhoto: function(obj){
    AppDispatcher.dispatch({
      actionType: 'setSelectedPhoto',
      data: obj
    });
  },


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
