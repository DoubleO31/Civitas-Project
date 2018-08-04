import React from "react";
import Menubar from "../Menubar.jsx";
import Appstore from "../../Stores/AppStore.js";
import AppActions from "../../Action/AppActions.js";
import {Link} from "react-router-dom";


class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      useremail: "",
      userinfo: "",
    };
  }

  callApi = async () => {
    const response = await fetch("/usersinfo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.useremail
      })
    });
    const userinfotemp = await response.json();

    if (response.status !== 200) throw Error(userinfotemp.message);

    return userinfotemp;
  };

  componentDidMount() {
    this.setState(
      {
        useremail: Appstore.getuserinfo()
      },
      () => {
        this.callApi()
          .then(result => this.setState({userinfo: result[0]}))
          .catch(err => console.log(err));
      }
    );
  }

  display() {
    if (this.state.userinfo !== "") {
      return this.state.userinfo.name;
    }
  }

  _logout = () => {
    AppActions.logout();
    AppActions.loginWindowOff();
  };

  /**
   * This method will be executed after initial rendering.
   */
  /**
   * Render the component.
   */
  render() {
    return (
      <div>
        <Menubar />
        <div style={{position: "fixed", top: 100, color: "white"}}>
          <h1>Welcome back {this.display()}!</h1>
        </div>
        <div style={{position: "fixed", top: 150, color: "white"}}>
          <Link to="/" ><button onClick={this._logout} >Log out</button></Link>
        </div>

      </div>
    );
  }
}

export default DashboardPage;
