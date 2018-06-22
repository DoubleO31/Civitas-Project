import React from "react";
import AppActions from '../Action/AppActions.js';

class Login extends React.Component {
  constructor(props) {
		super(props);
	}

  _closeUploadWindow = () => {
    AppActions.loginWindowOff();
  }

  _openSignupWindow = () => {
    AppActions.loginWindowOff();
    AppActions.signupWindowOn();

  }


  render() {
    if (!this.props.show) {
      return null;
    }

    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 400,
      margin: '0 auto',
      padding: 30
    };

    return (
      <div style = { backdropStyle } >
				<div style = { modalStyle } >

            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>

            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember"/> Remember me
            </label>
            <button onClick = { this._closeUploadWindow }> Close </button>

            <span class="psw">
            Forgot <a href="#">password?</a></span>
            <button onClick={this._openSignupWindow} class = "signup"> Signup </button>
        </div>
      </div>
    );
  }
}

export default Login;