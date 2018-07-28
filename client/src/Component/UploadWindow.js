import React, { Component } from "react";
import AppActions from '../Action/AppActions.js';
import axios from 'axios';

class UploadWindow extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		selectedFile: null,
		photoURL: null
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
  this.setState({selectedFile: event.target.files[0]});
}


	uploadHandler = () => {
	  const formData = new FormData()
		//to do empty file
	  formData.append('image', this.state.selectedFile, this.makeid())
		fetch('/upload', {
		method: 'POST',
		body: formData,
	})
	.then(function(res) {
	    return res.json();
	})
	.then(function(parsedData) {
		this.setState({photoURL: parsedData.imageUrl});
		console.log(this.state.photoURL);
		this.uploadmongodb();

	}.bind(this))
	.catch(error => {
	      console.error(error);
	    });
	}

	uploadmongodb = () =>{
		fetch('/mongodbupload', {
			method: 'POST',
			  headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json',
			  },
			  body: JSON.stringify({
			    src: this.state.photoURL,
			    title: "test",
					desc: "test",
					wow: 0
			  })
			})
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
						<input type="file" onChange={this.fileChangedHandler} />
					<button onClick={this.uploadHandler}>Upload!</button>
					<div>
						<button onClick = { this._closeUploadWindow }>Close </button>
					</div >
				</div>
			</div >
			);
	}
}

export default UploadWindow;
