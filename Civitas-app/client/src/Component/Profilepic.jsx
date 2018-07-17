import React from "react";
import AppActions from '../Action/AppActions.js';
import Auth from '../modules/Auth';
import { Link } from 'react-router-dom';

class Profilepic extends React.Component {

  constructor(props) {
		super(props);
	}

  _openLoginWindow = () => {
    AppActions.loginWindowOn();
  }

  _logout = () => {
    AppActions.logout();
  }


  render() {
    return(
    <div>
        <div className="big-cir">
        <img className="profile-picture"
          id="profile-picture"
          src="./profile.png"
          alt="profile"
        />
        {Auth.isUserAuthenticated() ? (
          <button onClick={this._logout} className="login">
            Log out
          </button>
        ) : (
          <button onClick={this._openLoginWindow} className="login">
            Log in
          </button>
        )}


        </div>
    </div>
  );
}
}


export default Profilepic;
