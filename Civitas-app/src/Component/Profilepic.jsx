import React from "react";
import AppActions from '../Action/AppActions.js';


  const Profilepic = ({ onClick }) => (
    <div>
        <div class="big-cir">
        <center><img className="profile-picture"
          id="profile-picture"
          src="./profile.png"
          alt="profile"
        />
        <button onClick={onClick} Class="signup">
          Sign Up
        </button>
        </center>

        </div>
    </div>
  );


export default Profilepic;
