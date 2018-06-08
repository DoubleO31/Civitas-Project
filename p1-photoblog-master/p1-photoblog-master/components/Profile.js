import React from "react";
import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";
import Button4 from "./Button4";

class Profile extends React.Component {
  render() {
    return (
      <div className="top-menu-container">
        <a href="#">
          {" "}
          <img
            id="profile-picture"
            src="https://goo.gl/4W6zSW"
            alt="profile picture"
          />{" "}
        </a>
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
      </div>
    );
  }
}

export default Profile;
