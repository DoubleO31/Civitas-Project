import React from "react";
import { Link } from 'react-router-dom';
import AppActions from '../Action/AppActions.js';


class Menubar extends React.Component {
  _closeLoginWindow = () => {
    AppActions.loginWindowOff();
  }

  render() {
    return (
      <div>

      <Link to="/" onClick={this._closeLoginWindow}>
        <div className="top-menu-container">
          <img className="logo-picture"
            id="logo-picture"
            src="https://storage.googleapis.com/civitasphoto/Logo.PNG"
            alt="logo"
          />
        </div>
      </Link>

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

export default Menubar;
