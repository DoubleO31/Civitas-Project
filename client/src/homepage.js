import React, {Component} from "react";
import "./App.css";
import "./styles.css";
import Menubar from "./Component/Menubar.jsx";
import Profilepic from "./Component/Profilepic.jsx";
import AppStore from "./Stores/AppStore.js";
import HighlightsContainer from "./Component/HighlightsContainer.jsx";
import UploadButton from "./Component/UploadButton.js";
import UploadWindow from "./Component/UploadWindow.js";
// import PhotoViewer from "./Component/PhotoViewer.js";
import PhotoViewer from "./Component/PhotoViewer.jsx";
import GPSViewer from "./Component/GPSviwer.jsx";
import AppActions from "./Action/AppActions.js";
import SignUpPage from "./Component/Signup/SignUpPage.jsx";
import LoginPage from "./Component/Login/LoginPage.jsx";
import {Link, IndexLink} from "react-router-dom";
import Auth from "./modules/Auth";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      uploadWindowOpen: AppStore.getUploadWindowStatus(),
      photoViewerOn: AppStore.getPhotoViewerStatus(),
      GPSViewerOn: AppStore.getGPSViewerStatus(),
      signupWindowOpen: AppStore.getSignupWindowStatus(),
      loginWindowOpen: AppStore.getLoginWindowStatus(),
      photos: [],
      selectedPhoto: AppStore.getSelectedPhoto(),
      updatestatus: false
    };
    this._onChange = this._onChange.bind(this);
  }

  callApi = async () => {
    const response = await fetch("/api/highlights", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        A: []
      })
    });
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
    this.callApi()
      .then(res => this.setState({photos: res}))
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    //console.log('onchange is called');
    //console.log(AppStore.getPhotoViewerStatus());
    this.setState({
      uploadWindowOpen: AppStore.getUploadWindowStatus(),
      photoViewerOn: AppStore.getPhotoViewerStatus(),
      GPSViewerOn: AppStore.getGPSViewerStatus(),
      signupWindowOpen: AppStore.getSignupWindowStatus(),
      loginWindowOpen: AppStore.getLoginWindowStatus(),
      selectedPhoto: AppStore.getSelectedPhoto(),
      updatestatus: AppStore.highlightsstatus()
    });
  }

  handleClick(obj) {
    AppActions.setSelectedPhoto(obj);
    AppActions.photoViewerOn();
  }

  updatehighlights() {
    //console.log(this.state.updatestatus);
    this.callApi()
      .then(res => this.setState({photos: res}))
      .catch(err => console.log(err));
    return <HighlightsContainer data={this.state.photos} />;
  }

  render() {
    return (
      <div className="App">
        <Menubar />
        <Profilepic />
        {Auth.isUserAuthenticated() ? <UploadButton /> : null}
        <div className="HighlightsContainer">
          {this.state.updatestatus ? (
            this.updatehighlights()
          ) : (
            <HighlightsContainer data={this.state.photos} />
          )}
        </div>
        <UploadWindow show={this.state.uploadWindowOpen} />
        <SignUpPage show={this.state.signupWindowOpen} />
        <LoginPage show={this.state.loginWindowOpen} />
        <PhotoViewer
          show={this.state.photoViewerOn}
          selectedPhoto={this.state.selectedPhoto}
        />
        <GPSViewer
          show={this.state.GPSViewerOn}
          selectedPhoto={this.state.selectedPhoto}
        />
      </div>
    );
  }
}

export default Homepage;
