import React from 'react';
let WowButton = function steatelessFunctionComponentClass(props) {
	let source = props.source;
	let arrID = props.arrID;

	let style = {
		fontSize: '1em',
		backgroundColor: 'lightblue',
		color: 'yellow',
		position: 'absolute',
		width: 'auto',
		height: 'auto',
		textAlign: 'justify',
		right: '0px',
		top: '150px',
		borderRadius: '100%'
	}

	return (
		<button id={source} style={style} onClick={props.onClick}>
		Wow! 
		<div> 29k </div>
	{/* need to make a call to server to get number of wows, and when clicked 
		to $inc wow by 1. Maybe set some timeout so can't keep toggling. Need
		to also change the colour of the button if pressed?*/}

		</button>
		);
};

export default WowButton;