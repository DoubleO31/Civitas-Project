import React, { Component } from 'react';
import './App.css';
import './styles.css';
import Menubar from './Component/Menubar.jsx';
import Profilepic from './Component/Profilepic.jsx';
import AppStore from './Stores/AppStore.js';
import Highlight from './Component/Highlight.jsx';
import Signup from './Component/Signup.jsx';
import UploadButton from './Component/UploadButton.js'
import UploadWindow from './Component/UploadWindow.js'
import PhotoViewer from './Component/PhotoViewer.js'

class App extends Component {

  constructor(){
    super();
    console.log(AppStore.getPhotoViewerStatus());
    this.state = {
      uploadWindowOpen: AppStore.getUploadWindowStatus(),
      photoViewerOn: AppStore.getPhotoViewerStatus(),
      signupWindowOpen: AppStore.getSignupWindowStatus(),
    }
    this._onChange = this. _onChange.bind(this);
  }

  componentDidMount(){
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount(){
    AppStore.removeChangeListener(this._onChange);
  }

  _onChange(){
    console.log('onchange is called');
    console.log(AppStore.getPhotoViewerStatus());
    this.setState({
      uploadWindowOpen: AppStore.getUploadWindowStatus(),
      photoViewerOn: AppStore.getPhotoViewerStatus(),
      signupWindowOpen: AppStore.getSignupWindowStatus(),
    });
  }

  // parseJson(){
  //   var data = require('./highlights.json');
  //   for (var i = 0; i < data.length; i++) {
  //     var obj = data[i];
  //     console.log("source: " + obj.src);
  //   }
  //   {
  //     return data.map((Highlight, key) =>
  //       <Highlight source={obj.src} link = {obj.href} title = {obj.title} desc = {obj.desc}/>
  //       )
  //   }
  // }

  parseJson(){
   var data = require('./highlights.json');
   for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    console.log("source: " + obj.src);
  }
   return data.map((obj, key) =>
    <Highlight source={obj.src} link={obj.href} title={obj.title} desc={obj.desc} key={obj.src}/>
     )
 }


  render() {
    return (
      <div className="App">
      <Menubar/>
      <div>
      <Profilepic/>
      </div>
      <div className = "HighlightsContainer">
      {this.parseJson()}
      </div>
      <UploadButton/>
      <UploadWindow show={this.state.uploadWindowOpen}/>
      <Signup show={this.state.signupWindowOpen}/>
      <PhotoViewer show={this.state.photoViewerOn}/>
      </div>
      );
  }

}

export default App;
