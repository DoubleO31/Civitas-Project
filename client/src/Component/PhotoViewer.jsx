import React from 'react';
import AppActions from '../Action/AppActions.js';

class PhotoViewer extends React.Component {
	constructor(props) {
		super(props);
	}

	_closePhotoViewer = () => {
		AppActions.photoViewerOff();
	}

	render() {

		let bgColour = "#FFFFFF";
		let fontColour = "#000000";

    console.log("type of selectedPhoto:");
    console.log(typeof this.props.selectedPhoto);
    console.log(this.props.selectedPhoto);

		if (this.props.show === true) {

			console.log("selectedPhoto");
			console.log(this.props.selectedPhoto);
      console.log("src:");
      console.log(this.props.selectedPhoto.src);
      console.log("averageColour:");
      console.log(this.props.selectedPhoto.averageColour);

			var averageColour = this.props.selectedPhoto.averageColour;
      console.log(averageColour);
			bgColour = "rgba(" + averageColour[0] + ", " + averageColour[1] + ", " + averageColour[2] + ', 0.8)';
			var luminance = 0.299 * averageColour[0] + 0.587 * averageColour[1] + 0.114 * averageColour[2];
			fontColour = (luminance > 160) ? '#020202' : '#FAFAFA';
		}

		let backgroundStyle = {
			background: bgColour,
			color: fontColour,
		}

		if (!this.props.show) {
			return null;
		}
		return ( <
			div class = 'PhotoViewer' >
			<
			img src = {
				this.props.selectedPhoto.src
			}
			/> <
			div class = "PhotoViewerTextbox"
			style = {
				backgroundStyle
			} >
			<
			div > {
				this.props.selectedPhoto.title
			} < /div> <
			div > {
				this.props.selectedPhoto.desc
			} < /div> <
			/div> <
			button onClick = {
				this._closePhotoViewer
			} > Close Viewer < /button> <
			/div>
		);
	}

}

export default PhotoViewer;
