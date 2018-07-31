import AppDispatcher from '../Dispatcher/AppDispatcher.js';

const AppActions = {

  setSelectedPhoto: function(obj){
    AppDispatcher.dispatch({
      actionType: 'setSelectedPhoto',
      data: obj
    });
  },

  wowIncrement: function(wowed, count) {
    console.log('wowincrement called');
    AppDispatcher.dispatch ({
      actionType: 'wowIncrement',
      data: [wowed, count]
    });
  },

  wowDecrement: function(wowed, count) {
    console.log('wowdecrement called');
    AppDispatcher.dispatch ({
      actionType: ' wowDecrement',
      data: [wowed, count]
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

  logout: function(){
    AppDispatcher.dispatch({
      actionType: 'logout',
    });
  },

<<<<<<< HEAD
  saveuserinfo: function(obj){
    AppDispatcher.dispatch({
      actionType: 'setUserinfo',
      data: obj
    });
  },


=======
  reloadphoto: function(){
    AppDispatcher.dispatch({
      actionType: 'receiveData',
    });
  },

>>>>>>> d16d04bbb105d75b29641f21287e01ac6be5e6da









};

export default AppActions;
