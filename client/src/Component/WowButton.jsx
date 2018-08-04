import React from 'react';
import AppStore from "../Stores/AppStore.js";

class WowButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: this.props.wow,
      wowed: false,
      id: this.props.id
    }
  };

  mongodbIncWow() {
    // console.log("running mongodbIncWow");
    let userinfo = AppStore.getuserinfo();
    fetch('/mongodbIncWow', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: this.props.id, user: userinfo})
    }).catch(error => {
      console.error(error);
      // alert("failed to increase wow");
    });
    //AppActions.updatehighlights();
    // console.log("finished running mongodbIncWow");
  };

  mongodbDecWow() {
    // console.log("running mongodbDecWow");
    let userinfo = AppStore.getuserinfo();
    fetch('/mongodbDecWow', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: this.props.id, user: userinfo})
    }).catch(error => {
      console.error(error);
      // alert("failed to decrease wow");
    });
    //AppActions.updatehighlights();
    // console.log("finished running mongodbDecWow");
  };

  handleClick = (e) => {
    e.stopPropagation();
    if (!this.state.wowed) {
      this.setState((prevState, {count, wowed}) => ({
        count: prevState.count + 1,
        wowed: !prevState.wowed
      }));
      this.mongodbIncWow();
      // console.log("mongodbincWow ran " + this.props.id);

    } else {
      this.setState((prevState, {count, wowed}) => ({
        count: prevState.count - 1,
        wowed: !prevState.wowed
      }));
      this.mongodbDecWow();
      // console.log("mongodbdecWow ran " + this.props.id);

    }
  };

  render() {

    let wowStyle = {
      color: this.props.fontColour,
      background: this.props.bgColour,
    }

    return (<button className="highlight_button right bottom" style={wowStyle} id={this.props.source} onClick={this.handleClick.bind(this)}>
      Wow! {<br/>}
      {this.state.count}
    </button>);
  }
};

export default WowButton;
