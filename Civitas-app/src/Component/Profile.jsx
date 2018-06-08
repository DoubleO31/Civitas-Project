import React from "react";
import AppActions from '../Action/AppActions.js';

class Profile extends React.Component {
  constructor(){
    super();
    this._updatePhoto = this._updatePhoto.bind(this);
  }

  _updatePhoto(){
    AppActions.getHighlights();
  }


  render() {
    return (
      <div>
      <div className="top-menu-container">
        <a href="#">
          {" "}
          <img className="profile-picture"
            id="profile-picture"
            src="./logo.png"
            alt="profile picture"
          />{" "}
        </a>
      </div>
      <div class="titles-container">
      <span id="site-heading">
      </span>

      <span id="site-subheading">
      </span>
      </div>

      <div class="highlights-container" id="highlights-container">
      <button onClick = {this._updatePhoto}> Show Image </button>

      </div>
      </div>
    );
  }
}

export default Profile;
