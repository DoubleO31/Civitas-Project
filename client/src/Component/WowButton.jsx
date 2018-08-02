import React, { Component } from 'react';

class WowButton extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			count: this.props.wow,
			wowed: false,
			id: this.props.id
		}
	};

	mongodbIncWow(){
		// console.log("running mongodbIncWow");
		fetch('/mongodbIncWow', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				id: this.props.id
			})
		}).catch(error => {
			console.error(error);
			// alert("failed to increase wow");
		});
		// console.log("finished running mongodbIncWow");
	};

	mongodbDecWow(){
		// console.log("running mongodbDecWow");
		fetch('/mongodbDecWow', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				id: this.props.id
			})
		}).catch(error => {
			console.error(error);
			// alert("failed to decrease wow");
		});
		// console.log("finished running mongodbDecWow");
	};

	handleClick = (e) => {
		e.stopPropagation();
		if (!this.state.wowed) {
			this.setState((prevState, { count, wowed }) =>
				({
					count: prevState.count + 1,
					wowed: !prevState.wowed
				}));
			this.mongodbIncWow();
			// console.log("mongodbincWow ran " + this.props.id);

		} else {
			this.setState((prevState, {count, wowed }) => 
				({
					count: prevState.count - 1,
					wowed: !prevState.wowed
				}));
			this.mongodbDecWow();
			// console.log("mongodbdecWow ran " + this.props.id);
		}};

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