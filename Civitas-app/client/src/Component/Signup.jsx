import React from "react";
import AppActions from '../Action/AppActions.js';

class Signup extends React.Component {
  constructor(){
    super();
  }


/* Login window borrow from 3school */
  render() {
    return (
      <div id="id01" class="modal">

        <form class="modal-content animate" action="/action_page.php">
          <div class="imgcontainer">
            <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
            <img src="./profile.png" alt="Avatar" class="avatar"/>
          </div>

          <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>

            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember"/> Remember me
            </label>
          </div>

            <span class="psw">Forgot <a href="#">password?</a></span>
        </form>
      </div>
    );
  }
}

export default Signup;
