import React from "react";

class Profile extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Profile;
