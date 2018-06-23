import React, { Component } from 'react';
import './App.css';
import './styles.css';
import Menubar from './Component/Menubar.jsx';
import Profilepic from './Component/Profilepic.jsx';
import AppStore from './Stores/AppStore.js';
import Highlight from './Component/Highlight.jsx';
import Signup from './Component/Signup.jsx';
import Login from './Component/Login.jsx';
import UploadButton from './Component/UploadButton.js';
import UploadWindow from './Component/UploadWindow.js';
import PhotoViewer from './Component/PhotoViewer.js';
import AppActions from './Action/AppActions.js';

class App extends Component {

  constructor(){
    super();
    console.log(AppStore.getPhotoViewerStatus());
    this.state = {
      uploadWindowOpen: AppStore.getUploadWindowStatus(),
      photoViewerOn: AppStore.getPhotoViewerStatus(),
      signupWindowOpen: AppStore.getSignupWindowStatus(),
      loginWindowOpen: AppStore.getLoginWindowStatus(),
      photos: [],
      selectedPhoto: {},
    }
    this._onChange = this. _onChange.bind(this);
  }

callApi = async() =>{
  const response = await fetch('/api/hello');
  const body = await response.json();

  if(response.status !== 200) throw Error(body.message);

  return body;
};

  componentDidMount(){
      AppStore.addChangeListener(this._onChange);
      this.callApi()
      .then(res=>this.setState({photos: res}))
      .catch(err => console.log(err));
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
      loginWindowOpen: AppStore.getLoginWindowStatus(),
      selectedPhoto: AppStore.getSelectedPhoto(),
    });
  }

  parseJson(){
   var data = this.state.photos;
       console.log(Array.isArray(data));
   for (var i = 0; i < data.length; i++) {
    var obj = data[i];

  }
   return data.map((obj, key) =>
    <Highlight source={obj.src} link={obj.href} title={obj.title} desc={obj.desc} key={i} onClick={() => this.handleClick(obj)}/>
     )
 }


handleClick(obj){
  AppActions.setSelectedPhoto(obj);

  console.log(typeof obj.src);
  console.log(this.state.selectedPhoto.src);
console.log(typeof this.state.selectedPhoto);
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
      <PhotoViewer show={this.state.photoViewerOn}/>
      <p className="App-intro">{this.state.response} </p>
      </div>
      );
  }

}

export default App;
