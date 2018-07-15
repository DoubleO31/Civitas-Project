import React, { Component } from 'react';
class WowButton extends React.Component {
	state = {
		count: 42,
		wowed: false
	};

	constructor(props) {
		super(props);
	}

	handleClick = () => {
		if (!this.state.wowed) {
		this.setState((prevState, { count, wowed }) =>
			({
				count: prevState.count + 1,
				wowed: !prevState.wowed
			}));
	} else {
		this.setState((prevState, {count, wowed }) => 
			({
				count: prevState.count -1,
				wowed: !prevState.wowed
			}));
	}};

	render () {
		var cssStyle = {
			fontSize: '.8em',
			backgroundColor: 'lightblue',
			color: 'yellow',
			position: 'relative',
			width: 'auto',
			height: 'auto',
			textAlign: 'justify',
			right: '0px',
			top: '0px',
			borderRadius: '100%',
			zIndex: '0',
			display: 'block-Inline'
		}

		return (
			<button id={this.props.source} style={cssStyle} onClick={this.handleClick} >
			Wow! 
			<div> {this.state.count} </div>
	{/* need to make a call to server to get number of wows, and when clicked 
		to $inc wow by 1. Maybe set some timeout so can't keep toggling. Need
	to also change the colour of the button if pressed?*/}

	</button>
	);	
	}
};	

export default WowButton;