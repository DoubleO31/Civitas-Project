import React from "react";
import AppActions from '../Action/AppActions.js';

class Profilepic extends React.Component {

  constructor(props) {
		super(props);
	}

  _openLoginWindow = () => {
    AppActions.loginWindowOn();
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
        <button onClick={this._openLoginWindow} className="login">
          Log in
        </button>


        </div>
    </div>
  );
}
}


export default Profilepic;
