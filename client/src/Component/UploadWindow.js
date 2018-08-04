import React from "react";
import AppActions from '../Action/AppActions.js';
var EXIF = require('exif-js');
var latitude;
var longitude;

class UploadWindow extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		selectedFile: null,
		photoURL: null,
		long: 0,
		lat: 0
	}
	this.uploadHandler = this.uploadHandler.bind(this);
	}
	_closeUploadWindow = () => {

		AppActions.closeUploadWindow();
	}

	makeid = () => {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for (var i = 0; i < 12; i++)
			text += possible.charAt(Math.floor(Math.random() * possible.length));

		return text;
	}

	fileChangedHandler = (event) => {
		console.log("File change triggered!");
		this.setState({
			selectedFile: event.target.files[0]
		});
	}


	uploadHandler = (up) => {
		up.preventDefault();
	  const formData = new FormData()
		//to do empty file
		if(this.state.selectedFile){
			EXIF.getData(this.state.selectedFile, function() {
				var lat = EXIF.getTag(this, "GPSLatitude");
				var latRef = EXIF.getTag(this, "GPSLatitudeRef");
				var long = EXIF.getTag(this, "GPSLongitude");
				var longRef = EXIF.getTag(this, "GPSLongitudeRef");
				if (lat && long && latRef && longRef &&
          typeof lat !== 'undefined' && typeof long !== 'undefined'
        && typeof latRef !== 'undefined' && typeof longRef !== 'undefined'){
					if (latRef === "S") {
						latitude = (lat[0]*-1) + (( (lat[1]*-60) + (lat[2]*-1) ) / 3600);
					} else {
						latitude = lat[0] + (( (lat[1]*60) + lat[2] ) / 3600);
					}

					if (longRef === "W") {
						longitude = (long[0]*-1) + (( (long[1]*-60) + (long[2]*-1) ) / 3600);
					} else {
						longitude = long[0] + (( (long[1]*60) + long[2] ) / 3600);
					}
				}
			});

			console.log("Uploading to gcs");
			console.log(this.state.selectedFile);
			formData.append('image', this.state.selectedFile, this.makeid());
			fetch('/upload', {
					method: 'POST',
					body: formData,
				})
				.then(function(res) {
					return res.json();
				})
				.then(function(parsedData) {
					if (parsedData.imageUrl) {
						this.setState({
							photoURL: parsedData.imageUrl,
							long: longitude,
							lat: latitude
						});
						console.log(this.state.photoURL);
						// console.log(this.state.lat,this.state.long);
						this.uploadmongodb();
            AppActions.updatehighlights();
            this.setState({selectedFile: null});
            alert("Upload Successful");
            AppActions.closeUploadWindow();
						longitude = null;
						latitude = null;
					} else {
						alert("Upload fail please try again");
					}
				}.bind(this))
				.catch(error => {
					console.error(error);
				});
		} else {
			alert("Please select a file to upload");
		}
	}

	uploadmongodb = () => {
		const formData = new FormData();
		formData.append('src', this.state.photoURL);
		formData.append('title', this.fileTitle.value);
		formData.append('desc', this.fileDesc.value);
		formData.append('wow', 0);
		formData.append('latitude', this.state.lat);
		formData.append('longitude', this.state.long);
		formData.append('image', this.state.selectedFile);
		fetch('/mongodbupload', {
			method: 'POST',
			body: formData,
			// NOTE MUST NOTTTT SET header!!!
		}).then((res) => {
			return res.json();
		}).catch(error => {
			console.error(error);
		});
	}

	render() {
		if (!this.props.show) {
			return null;
		}
		// The gray background
		const backdropStyle = {
			position: 'fixed',
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			backgroundColor: 'rgba(0,0,0,0.3)',
			padding: 50
		};

		// The modal "window"
		const modalStyle = {
			backgroundColor: '#fff',
			borderRadius: 5,
			maxWidth: 500,
			minHeight: 300,
			margin: '0 auto',
			padding: 30
		};


		return (
			<div style = { backdropStyle } >
				<div style = { modalStyle } >
					<h1>Share Your Photos</h1>
					<form onSubmit={this.uploadHandler}>
					<div>
						<input type="file" accept='image/*' onChange={this.fileChangedHandler} />
					</div>
					<div>
						<input ref={(ref) => { this.fileTitle = ref; }} type="text" placeholder="Enter the desired title of file" />
					</div>
					<div>
						<input ref={(ref) => { this.fileDesc = ref; }} type="text" placeholder="Enter the desired description of file" />
					</div>
					<button>Upload!</button>
					</form>
					<div>
						<button onClick = { this._closeUploadWindow }>Close </button>
					</div >
				</div>
			</div >
			);
	}
}

export default UploadWindow;
