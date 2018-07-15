import React, { Component } from 'react';
import AppActions from '../Action/AppActions.js';
import AppStore from '../Stores/AppStore.js';

class WowButton extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			wowed: false
		}

		this._onChange = this._onChange.bind(this);
	}

	componentDidMount(){
		AppStore.addChangeListener(this._onChange);
	}

	componentDidUnmount(){
		AppStore.removeChangeListener(this._onChange);
	}

	_onChange() {
		// console.log('onchange is called');
		// console.log(AppStore.getWowCount());
		this.setState({
			count: AppStore.getWowCount(),
			wowed: AppStore.getWowed()
		});
	}

	_WowHandleClick = () => {
		if(!this.state.wowed) {
			AppActions.wowIncrement(this.state.wowed, this.state.count);
			console.log(this.state.wowed);
		} else if (this.state.wowed) {
			// console.log('calling decrement from component');
			AppActions.wowDecrement(this.state.wowed, this.state.count);
		}
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
				<button id={this.props.source} style={cssStyle} onClick={this._WowHandleClick} >
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