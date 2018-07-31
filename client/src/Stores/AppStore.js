import AppDispatcher from '../Dispatcher/AppDispatcher.js';
import { EventEmitter } from 'events';
import Auth from '../modules/Auth';

const CHANGE_EVENT = 'change';

let _uploadWindowOpen = false;
let _photoViewerOn = false;
let _signupWindowOn = false;
let _loginWindowOn = false;
let _wowed = false;
var bgColor = null;

var _photos = [];
var _selectedPhoto = {};
var _wowCount = 0;
var useremail;


function setSelectedPhoto(obj) {
  _selectedPhoto = obj;
}

function logout() {
  Auth.deauthenticateUser();}

function loadWowDetails(data) {
  _wowCount = data[1];
  _wowed = data[0];
}




<<<<<<< HEAD

=======
>>>>>>> d16d04bbb105d75b29641f21287e01ac6be5e6da
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

  getSelectedPhoto(){
    return _selectedPhoto;
  }

  getUploadWindowStatus() {
	return _uploadWindowOpen;
	}

	getPhotoViewerStatus() {
  	return _photoViewerOn;
  }

	getSignupWindowStatus() {
		return _signupWindowOn;
	}

  getLoginWindowStatus() {
    return _loginWindowOn;
  }

  getWowed() {
    return _wowed;
  }

  getWowCount() {
    return _wowCount;
  }

<<<<<<< HEAD
  getuserinfo() {
    return useremail;
  }

=======
  callApi = async() =>{
    const response = await fetch('/api/highlights');
    const body = await response.json();

    if(response.status !== 200) throw Error(body.message);

    return body;
  };

  loadPhotoData() {
    this.callApi()
    .then(res=>this.setState({_photos: res}))
    .catch(err => console.log(err));
  }
>>>>>>> d16d04bbb105d75b29641f21287e01ac6be5e6da
}

const _appStore = new Appstore();

export default _appStore;

_appStore.dispatchToken = AppDispatcher.register( action => {
  switch ( action.actionType ){

<<<<<<< HEAD
=======
    case 'receiveData':
    this.loadPhotoData();
    break;
>>>>>>> d16d04bbb105d75b29641f21287e01ac6be5e6da

    case 'setSelectedPhoto':
    setSelectedPhoto(action.data);
    _appStore.emitChange();
    break;

    case 'photoViewerOn':
    _photoViewerOn = true;
    _appStore.emitChange();
    break;

    case 'photoViewerOff':
    _photoViewerOn = false;
    _appStore.emitChange();
    break;

		case 'signupWindowOn':
		_signupWindowOn = true;
		_appStore.emitChange();
		break;

		case 'signupWindowOff':
		_signupWindowOn = false;
		_appStore.emitChange();
		break;

    case 'loginWindowOn':
    _loginWindowOn = true;
    _appStore.emitChange();
    break;

    case 'loginWindowOff':
    _loginWindowOn = false;
    _appStore.emitChange();
    break;


    case 'toggleUploadWindow':
  	_uploadWindowOpen = !_uploadWindowOpen;
    _appStore.emitChange();
    break;


    case 'wowIncrement':
    loadWowDetails(action.data);
    _wowed = true;
    _wowCount = _wowCount + 1;
    _appStore.emitChange();
    break;

    case 'wowDecrement':
    loadWowDetails(action.data);
    _wowed = false;
    _wowCount = _wowCount - 1;
    _appStore.emitChange();
    break;

    case 'logout':
    logout();
    _appStore.emitChange();
    break;

    case 'setUserinfo':
    useremail = action.data;
    _appStore.emitChange();
    break;


    default:
    break;
  }

  return true;
});
