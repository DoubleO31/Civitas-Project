import React from "react";
import Auth from "../../modules/Auth";
import Menubar from "../Menubar.jsx";
import Appstore from "../../Stores/AppStore.js";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{lat: -34.397, lng: 150.644}}>
      {props.isMarkerShown && (
        <Marker position={{lat: -34.397, lng: 150.644}} />
      )}
    </GoogleMap>
  ))
);

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      useremail: "",
      userinfo: "",
      isMarkerShown: false
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

    this.delayedShowMarker();
  }

  display() {
    if (this.state.userinfo !== "") {
      return this.state.userinfo.name;
    }
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({isMarkerShown: true});
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({isMarkerShown: false});
    this.delayedShowMarker();
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
        <h1>
          Welcome back {this.display()}
          <MyMapComponent
            isMarkerShown={this.state.isMarkerShown}
            onMarkerClick={this.handleMarkerClick}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCx55KjQx3iDjCF4RTdo4PD_WfEWLiADVE&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{height: `100%`}} />}
            containerElement={<div style={{height: `400px`}} />}
            mapElement={<div style={{height: `100%`}} />}
          />
        </h1>
      </div>
    );
  }
}

export default DashboardPage;
