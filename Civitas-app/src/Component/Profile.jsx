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
          <img className="logo-picture"
            id="logo-picture"
            src="./logo.png"
            alt="logo"
          />
          <div class="big-cir">
          <center><img className="profile-picture"
            id="profile-picture"
            src="./profile.png"
            alt="profile"
          /></center>
          </div>
      </div>
      <div className="titles-container">
      <span id="site-heading">
      </span>

      <span id="site-subheading">
      </span>
      </div>


      </div>
    );
  }
}

export default Profile;
