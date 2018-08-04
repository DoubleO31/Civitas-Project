import React from "react";
import AppActions from  '../Action/AppActions.js';

class UploadButton extends React.Component {


	_openUploadWindow = () => {
		AppActions.openUploadWindow();
		console.log('Opening upload window...');

	}

	render() {
		return ( < button className='UploadButton' onClick = { this._openUploadWindow } >
		<div className="uploadSymbol">
			Upload
			</div>
			<div className="uploadVerbose">
			 Your Photo
			 </div>
			</button>
		);
	}
}

export default UploadButton;
