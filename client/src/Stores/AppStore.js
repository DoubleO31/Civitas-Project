import AppDispatcher from "../Dispatcher/AppDispatcher.js";
import {EventEmitter} from "events";
import Auth from "../modules/Auth";

const CHANGE_EVENT = "change";

let _uploadWindowOpen = false;
let _photoViewerOn = false;
let _signupWindowOn = false;
let _loginWindowOn = false;
let _GPSViewerOn = false;
let _wowed = false;
var bgColor = null;

var _photos = [];
var _selectedPhoto = {};
var _wowCount = 0;
var update = false;
var lat = 0;
var long = 0;

function setSelectedPhoto(obj) {
  _selectedPhoto = obj;
}

function logout() {
  Auth.deauthenticateUser();
}

function loadWowDetails(data) {
  _wowCount = data[1];
  _wowed = data[0];
}

function saveuserinfo(data) {
  localStorage.setItem("userinfo", data);
}

function updatehighlights() {
  update = true;
}

function loadGPSDetails(data) {
  //var gps = localStorage.getItem(data);
  if(data){
  lat = data[0];
  long = data[1];}
}

class Appstore extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  getSelectedPhoto() {
    return _selectedPhoto;
  }

  getUploadWindowStatus() {
    return _uploadWindowOpen;
  }

  getPhotoViewerStatus() {
    return _photoViewerOn;
  }

  getGPSViewerStatus() {
    return _GPSViewerOn;
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

  getuserinfo() {
    return localStorage.getItem("userinfo");
  }

  highlightsstatus() {
    if (update) {
      update = false;
      return true;
    } else {
      return update;
    }
  }

  getlat(){
    return lat;
  }

  getlong(){
    return long;
  }
}

const _appStore = new Appstore();

export default _appStore;

_appStore.dispatchToken = AppDispatcher.register(action => {
  switch (action.actionType) {
    case "setSelectedPhoto":
      setSelectedPhoto(action.data);
      _appStore.emitChange();
      break;

    case "photoViewerOn":
      _photoViewerOn = true;
      _appStore.emitChange();
      break;

    case "photoViewerOff":
      _photoViewerOn = false;
      _appStore.emitChange();
      break;

    case "signupWindowOn":
      _signupWindowOn = true;
      _appStore.emitChange();
      break;

    case "signupWindowOff":
      _signupWindowOn = false;
      _appStore.emitChange();
      break;

    case "loginWindowOn":
      _loginWindowOn = true;
      _appStore.emitChange();
      break;

    case "loginWindowOff":
      _loginWindowOn = false;
      _appStore.emitChange();
      break;

    case "toggleUploadWindow":
      _uploadWindowOpen = !_uploadWindowOpen;
      _appStore.emitChange();
      break;

    case "wowIncrement":
      loadWowDetails(action.data);
      _wowed = true;
      _wowCount = _wowCount + 1;
      _appStore.emitChange();
      break;

    case "wowDecrement":
      loadWowDetails(action.data);
      _wowed = false;
      _wowCount = _wowCount - 1;
      _appStore.emitChange();
      break;

    case "logout":
      logout();
      _appStore.emitChange();
      break;

    case "setUserinfo":
      saveuserinfo(action.data);
      _appStore.emitChange();
      break;

    case "updatehighlights":
      updatehighlights();
      _appStore.emitChange();
      break;

    case "GPSViewerOff":
      _GPSViewerOn = false;
      _appStore.emitChange();
      break;

    case "GPSViewerOn":
      loadGPSDetails(action.data);
      _GPSViewerOn = true;
      _appStore.emitChange();
      break;

    default:
      break;
  }

  return true;
});
