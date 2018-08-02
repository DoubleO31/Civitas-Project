import React, { Component } from "react";
import AppActions from '../Action/AppActions.js';

class PhotoViewer extends React.Component {

	constructor(props) {
		super(props);
	}

	_closePhotoViewer = () => {
		AppActions.photoViewerOff();
	}

	render() {
		let cssStyle = {
			height : "30em"
		}

		if (!this.props.show) {
			return null;
		}
		return ( 
		<div class='PhotoViewer'>
      <img src={this.props.selectedPhoto.src} style={cssStyle} />
      <div> {this.props.selectedPhoto.title}</div>
      <div>{this.props.selectedPhoto.desc}</div>
      <button onClick={this._closePhotoViewer}>Close Viewer</button>
    </div>
		);
	}
}

export default PhotoViewer;