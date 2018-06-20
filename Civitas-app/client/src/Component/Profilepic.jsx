import React from "react";
import AppActions from '../Action/AppActions.js';

class Profilepic extends React.Component {

  constructor(props) {
		super(props);
	}

  _openSignupWindow = () => {
    AppActions.signupWindowOn();

  }
  render() {
    return(
    <div>
        <div class="big-cir">
        <center><img className="profile-picture"
          id="profile-picture"
          src="./profile.png"
          alt="profile"
        />
        <button onClick={this._openSignupWindow} Class="signup">
          Log in
        </button>
        </center>

        </div>
    </div>
  );
}
}


export default Profilepic;
