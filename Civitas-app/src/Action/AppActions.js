import AppDispatcher from '../Dispatcher/AppDispatcher.js';

const AppActions = {

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


  setCounter: function ( num ){
    AppDispatcher.dispatch(
      {
        actionType: 'setCounter',
        num: num
      }
    );
  },

  getHighlights: function(){
    AppDispatcher.dispatch(
      {
        actionType: 'getHighlights',
      }
    );

  },

  createHighlightHTML: function( idNumber, href, title, desc, src ){
    AppDispatcher.dispatch(
      {
        actionType: 'createHighlightHTML',
        idNumber:idNumber,
        href:href,
        title:title,
        desc:desc,
        src:src
      }
    );

  },

  createHighlightCSS: function( myStyle, idNumber, bgRedChannel, bgGreenChannel, bgBlueChannel, img ){
    AppDispatcher.dispatch(
      {
        actionType: 'createHighlightCSS',
        myStyle:myStyle,
        idNumber:idNumber,
        bgRedChannel:bgRedChannel,
        bgGreenChannel:bgGreenChannel,
        bgBlueChannel:bgBlueChannel,
        img:img
      }
    );

  },









};

export default AppActions;
