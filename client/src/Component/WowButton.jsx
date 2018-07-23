import React, { Component } from 'react';
class WowButton extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			count: this.props.wow,  // call this.props.count later
			wowed: false,
			arrID: this.props.arrID
		}
		// console.log(this.props.arrID);
		// console.log(this.props.wow);
	}

	handleClick = (e) => {
		e.stopPropagation();
		if (!this.state.wowed) {
		this.setState((prevState, { count, wowed }) =>
			({
				count: prevState.count + 1,
				wowed: !prevState.wowed
			}));
		//callApi

	} else {
		this.setState((prevState, {count, wowed }) => 
			({
				count: prevState.count - 1,
				wowed: !prevState.wowed
			}));
		// callApi
	}};

// how do you make the proper calls to node.js????

	callApi = async() => {
		const response = await fetch('/api/highlights');
		const body = await response.json();
		if(response.status !== 200) throw Error(body.message);

		return body;
	};

	componentDidMount(){
		// call node.js API
		this.callApi();
	}

	componentWillUnmount(){
		// nothing necessary here
	}

	render () {
		var cssStyle = {
			fontSize: '.8em',
			backgroundColor: 'lightblue',
			color: 'yellow',
			position: 'absolute',
			width: '3em',
			height: '3em',
			textAlign: 'center',
			right: '10px',
			top: '200px',
			borderRadius: '0%',
			zIndex: '0',
			padding: '0px 0px 0px 0px',
		}

		return (
			<button id={this.props.source} style={cssStyle} onClick={this.handleClick.bind(this)} >
			Wow! {<br/>}
			{this.state.count}
	</button>
	);	
	}
};	

export default WowButton;