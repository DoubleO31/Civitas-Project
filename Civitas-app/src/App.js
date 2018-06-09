import React, { Component } from 'react';
import './App.css';
import './styles.css';
import Counter from './Component/Counter.jsx';
import Menubar from './Component/Menubar.jsx';
import Profilepic from './Component/Profilepic.jsx';
import AppStore from './Stores/AppStore.js';
import Highlight from './Component/Highlight.jsx';
import Modal from './Component/Modal';
import Signup from './Component/Signup';
import UploadButton from './Component/UploadButton.js'
import UploadWindow from './Component/UploadWindow.js'
import PhotoViewer from './Component/PhotoViewer.js'

class App extends Component {

  constructor(){
    super();
console.log(AppStore.getPhotoViewerStatus());
    this.state = {
      counter: AppStore.getCounterNum(),
      uploadWindowOpen: AppStore.getUploadWindowStatus(),
      photoViewerOn: AppStore.getPhotoViewerStatus(),
      isOpen: false
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
      counter: AppStore.getCounterNum(),
      uploadWindowOpen: AppStore.getUploadWindowStatus(),
      photoViewerOn: AppStore.getPhotoViewerStatus(),
    });
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    return (
      <div className="App">
        <Menubar/>
        <div>
        <Profilepic onClick={this.toggleModal}/>
        </div>
        <Highlight/>
        <Highlight/>
        <Highlight/>
        <Highlight/>
        <UploadButton/>
        <UploadWindow show={this.state.uploadWindowOpen}/>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          <Signup/>
        </Modal>
        <PhotoViewer show={this.state.photoViewerOn}/>
      </div>
    );
  }
}

export default App;
