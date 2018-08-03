import React, {Component} from 'react';
import AppActions from '../Action/AppActions.js';
import AppStore from "../Stores/AppStore.js";

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
    var cssStyle = {
      fontSize: '.8em',
      fontWeight: 'bold',
      backgroundColor: 'rgba(0,33,255,0.5)',
      color: '#00b7ff',
      position: 'absolute',
      width: '3em',
      height: '3em',
      textAlign: 'center',
      left: '10px',
      top: '200px',
      borderRadius: '15%',
      zIndex: '0',
      padding: '0px 0px 0px 0px'
    }

    return (<button style={cssStyle} onClick={this.handleClick.bind(this)}>
      GPS
    </button>);
  }
};

export default GPSbutton;
