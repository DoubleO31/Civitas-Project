import React from "react";
import AppActions from "../Action/AppActions.js";

class PhotoViewer extends React.Component {
  _closePhotoViewer = () => {
    AppActions.photoViewerOff();
  };

  render() {
    let bgColour = "#FFFFFF";
    let fontColour = "#000000";

    if (this.props.show === true) {
      var averageColour = this.props.selectedPhoto.averageColour;
      bgColour =
        "rgba(" +
        averageColour[0] +
        ", " +
        averageColour[1] +
        ", " +
        averageColour[2] +
        ", 0.8)";
      var luminance =
        0.299 * averageColour[0] +
        0.587 * averageColour[1] +
        0.114 * averageColour[2];
      fontColour = luminance > 160 ? "#020202" : "#FAFAFA";
    }

    let backgroundStyle = {
      background: bgColour,
      color: fontColour
    };

    if (!this.props.show) {
      return null;
    }
    return (
      <div class="PhotoViewer">
        <img src={this.props.selectedPhoto.src} alt="" />{" "}
        <div class="textbox" style={backgroundStyle}>
          <div> {this.props.selectedPhoto.title} </div>{" "}
          <div> {this.props.selectedPhoto.desc} </div>{" "}
        </div>{" "}
        <button onClick={this._closePhotoViewer}> Close Viewer </button>{" "}
      </div>
    );
  }
}

export default PhotoViewer;
