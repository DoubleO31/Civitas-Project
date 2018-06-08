import AppDispatcher from '../Dispatcher/AppDispatcher.js';

const AppActions = {

  setCounter: function ( num ){
    AppDispatcher.dispatch(
      {
        actionType: 'setCounter',
        num: num
      }
    );
  }
};

export default AppActions;
