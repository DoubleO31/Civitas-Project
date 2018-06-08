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
            alt="profile"
          />{" "}
        </a>
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