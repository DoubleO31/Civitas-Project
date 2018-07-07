import React from "react";
import AppActions from '../Action/AppActions.js';
import img from '../profile.png';

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
          src={img}
          alt="profile"
        />


        </div>
    </div>
  );
}
}


export default Profilepic;
