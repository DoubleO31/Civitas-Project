import React from 'react';
import '../App.css';
import '../styles.css';
import Menubar from './Menubar.jsx';
import Profilepic from './Profilepic.jsx';
import AppStore from '../Stores/AppStore.js';
import Highlight from './Highlight.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import UploadButton from './UploadButton.js';
import UploadWindow from './UploadWindow.js';
import PhotoViewer from './PhotoViewer.js';
import AppActions from '../Action/AppActions.js';
import WowButton from './WowButton.jsx';

class HomePage extends React.Component {

  constructor(){
    super();
    this.state = {
      uploadWindowOpen: AppStore.getUploadWindowStatus(),
      photoViewerOn: AppStore.getPhotoViewerStatus(),
      signupWindowOpen: AppStore.getSignupWindowStatus(),
      loginWindowOpen: AppStore.getLoginWindowStatus(),
      photos: [],
      selectedPhoto: AppStore.getSelectedPhoto(),
    }
    this._onChange = this. _onChange.bind(this);
  }

  componentWillUnmount(){
      AppStore.removeChangeListener(this._onChange);
    }

  _onChange(){
    //console.log('onchange is called');
    //console.log(AppStore.getPhotoViewerStatus());
    this.setState({
      uploadWindowOpen: AppStore.getUploadWindowStatus(),
      photoViewerOn: AppStore.getPhotoViewerStatus(),
      signupWindowOpen: AppStore.getSignupWindowStatus(),
      loginWindowOpen: AppStore.getLoginWindowStatus(),
      selectedPhoto: AppStore.getSelectedPhoto(),
    });
  }

  parseJson(){
   var data = this.state.photos;
   for (var i = 0; i < data.length; i++) {
    var obj = data[i];

  }
   return data.map((obj, key) =>
    <Highlight source={obj.src} link={obj.href} title={obj.title} desc={obj.desc} key={key} onClick={() => this.handleClick(obj)}/>
     )
 }


handleClick(obj){
  AppActions.setSelectedPhoto(obj);
  AppActions.photoViewerOn();
}

  render() {
    return (
      <div className="App">
      <Menubar/>
      <Profilepic/>
            <UploadButton/>
      <div className = "HighlightsContainer">
      {this.parseJson()}
      
      </div>

      <UploadWindow show={this.state.uploadWindowOpen}/>
      <Signup show={this.state.signupWindowOpen}/>
      <Login show={this.state.loginWindowOpen}/>
      <PhotoViewer show={this.state.photoViewerOn} selectedPhoto={this.state.selectedPhoto}/>
      </div>
      );
  }

}

export default HomePage;
