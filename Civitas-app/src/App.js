import React, { Component } from 'react';
import './App.css';
import './styles.css';
import Counter from './Component/Counter.jsx';
import Profile from './Component/Profile.jsx';
import AppStore from './Stores/AppStore.js';
import Highlight from './Component/Highlight.jsx';

class App extends Component {

  constructor(){
    super();
    this.state = {
      counter: AppStore.getCounterNum(),
    }
    this._onChange = this. _onChange.bind(this);
  }

  componentDidMount(){
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount(){
    AppStore.removeChangeListener(this._onChange);
  }

  _onChange(){
    this.setState({
      counter: AppStore.getCounterNum()
    });
  }


  render() {
    return (
      <div className="App">
        <Profile/>
        <Highlight/>
        <Highlight/>
        <Highlight/>
        <Highlight/>
      </div>
    );
  }
}

export default App;
