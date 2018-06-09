import React, { Component } from 'react';
import './App.css';
import './styles.css';
import Counter from './Component/Counter.jsx';
import Profile from './Component/Profile.jsx';
import AppStore from './Stores/AppStore.js';
<<<<<<< HEAD
import Highlight from './Component/Highlight.jsx';
import UploadButton from './Component/UploadButton.js'
import UploadWindow from './Component/UploadWindow.js'
=======
>>>>>>> parent of 2b4bfc4... Merge pull request #2 from DoubleO31/James's-branch

class App extends Component {

  constructor(){
    super();
    this.state = {
      counter: AppStore.getCounterNum(),
      uploadWindowOpen: AppStore.getUploadWindowStatus(),
    };

    this._onChange = this. _onChange.bind(this);
  }

  toggleUploadWindow() {
    this.setState({
      uploadWindowOpen: AppStore.getUploadWindowStatus(),
    });
  }

  componentDidMount(){
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount(){
    AppStore.removeChangeListener(this._onChange);
  }

  _onChange(){
    this.setState({
      counter: AppStore.getCounterNum(),
      uploadWindowOpen: AppStore.getUploadWindowStatus(),
    });
  }


  render() {
    return (
      <div className="App">
        <Profile/>
<<<<<<< HEAD
        <Highlight/>
        <Highlight/>
        <Highlight/>
        <Highlight/>
        <UploadButton/>
        <UploadWindow show={this.state.uploadWindowOpen}/>
=======
>>>>>>> parent of 2b4bfc4... Merge pull request #2 from DoubleO31/James's-branch
      </div>
    );
  }
}

export default App;
