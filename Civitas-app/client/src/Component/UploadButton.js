import React, { Component } from "react";
import AppActions from  '../Action/AppActions.js';

class UploadButton extends React.Component {

	constructor(props) {
		super(props);
	}


	_openUploadWindow = () => {
		AppActions.openUploadWindow();
		console.log('Opening upload window...');

	}

	render() {
		return ( < button className='UploadButton' onClick = { this._openUploadWindow } >
			Upload Your Photo
			</button>
		);
	}
}

export default UploadButton;