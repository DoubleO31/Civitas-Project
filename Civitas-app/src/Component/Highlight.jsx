import React from "react";
import AppActions from '../Action/AppActions.js';

class Highlight extends React.Component {
  // constructor(){
  //   super();
  //   this._updatePhoto = this._updatePhoto.bind(this);
  // }

  // _updatePhoto(){
  //   AppActions.getHighlights();
  // }

  _openPhotoViewer = () => {
    AppActions.photoViewerOn();
  }

  render() {
    return (
      <div id="highlight1">
      <a href="#">
      <img src={require('../1.jpg')} />
      </a>
      <div id="highlight1-title">title</div>
      <div id="highlight1-desc">desc</div>
      <button onClick={this._openPhotoViewer}>Enlarge Photo</button>
    </div>
    );
  }
}

export default Highlight;




    // <div className="top-menu-container">
    //     <a href="#">
    //       {" "}
    //       <img className="profile-picture"
    //         id="profile-picture"
    //         src="./logo.png"
    //         alt="profile picture"
    //       />{" "}
    //     </a>
    //   </div>
    //   <div class="titles-container">
    //   <span id="site-heading">
    //   </span>

    //   <span id="site-subheading">
    //   </span>
    //   </div>

    //   <div class="highlights-container" id="highlights-container">
    //   <button onClick = {this._updatePhoto}> Show Image </button>

    //   </div>