import React, {Component} from "react";
import AppActions from '../Action/AppActions.js';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import AppStore from "../Stores/AppStore.js";

const MyMapComponent = withScriptjs(withGoogleMap(props => (<GoogleMap defaultZoom={8} defaultCenter={{
    lat: parseFloat(props.lat),
    lng: parseFloat(props.long)
  }}>
  {
    props.isMarkerShown && (<Marker position={{
        lat: parseFloat(props.lat),
        lng: parseFloat(props.long)
      }}/>)
  }
</GoogleMap>)));

const backdropStyle = {
  position: 'fixed',
  top: 180,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3)'
};

const modalStyle = {
  backgroundColor: '#fff',
  borderRadius: 5,
  maxWidth: 1000,
  minHeight: 300,
  margin: '0 auto'
};

class GPSviwer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isMarkerShown: false,
      lat: AppStore.getlat(),
      long: AppStore.getlong()
    };
		this._onChange = this._onChange.bind(this);
  }

  _closeGPSViewer = () => {
    AppActions.GPSViewerOff();
  };

  componentDidMount() {
		AppStore.addChangeListener(this._onChange);
    this.delayedShowMarker();
  };

	componentWillUnmount() {
		AppStore.removeChangeListener(this._onChange);

	}



  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({isMarkerShown: true});
    }, 3000);
  };

  _onChange() {
    this.setState({lat: AppStore.getlat(), long: AppStore.getlong()});
  }

  render() {
    let cssStyle = {
      height: "30em"
    }

    if (!this.props.show) {
      return null;
    }
    return (<div style={backdropStyle}>
      <div style={modalStyle}>
        <MyMapComponent isMarkerShown={this.state.isMarkerShown} googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCx55KjQx3iDjCF4RTdo4PD_WfEWLiADVE&v=3.exp&libraries=geometry,drawing,places" loadingElement={<div style = {{height: `100%`}}/>} containerElement={<div style = {{height: `600px`}}/>} mapElement={<div style = {{height: `100%`}}/>} lat={this.state.lat} long={this.state.long}/>
        <button onClick={this._closeGPSViewer}>Close Viewer
        </button>
      </div>
    </div>);
  }
}

export default GPSviwer;
