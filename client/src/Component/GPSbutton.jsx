import React from 'react';
import AppActions from '../Action/AppActions.js';

class GPSbutton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.lat,
      long: this.props.long
    }
  };

  handleClick = (e) => {
    e.stopPropagation();
    AppActions.GPSViewerOn(this.state.lat, this.state.long)
  };

  render() {

    let gpsButtonStyle = {
      color : this.props.fontColour,
      background: this.props.bgColour,
    }

    return (

      <button className="highlight_button left bottom" style={gpsButtonStyle} onClick={this.handleClick.bind(this)}>
      GPS
    </button>);
  }
};

export default GPSbutton;
