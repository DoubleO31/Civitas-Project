import AppDispatcher from '../Dispatcher/AppDispatcher.js';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _counter = 0;


class Appstore extends EventEmitter {

  emitChange(){
    this.emit( CHANGE_EVENT);
  }

  addChangeListener( callback ){
    this.on( CHANGE_EVENT, callback);
  }

  removeChangeListener(callback){
    this.removeListener (CHANGE_EVENT, callback);
  }

  getCounterNum(){
    return _counter;
  }
}

const _appStore = new Appstore();

export default _appStore;

_appStore.dispatchToken = AppDispatcher.register( action => {
  switch ( action.actionType ){

    case 'setCounter':
    _counter = action.num;
    _appStore.emitChange();
    break;

    default:
    break;
  }

  return true;
});
