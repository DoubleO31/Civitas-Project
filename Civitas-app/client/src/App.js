import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Link, Redirect, Switch } from "react-router-dom";
import Auth from './modules/Auth';
import Homepage from './homepage.js';
import DashboardPage from './Component/Dashboard/DashboardPage.jsx';


class ProtectedRoute extends Component {
  render() {
    const { component: Component, ...props } = this.props

    return (
      <Route
        {...props}
        render={props => (
          Auth.isUserAuthenticated() ?
            <Component {...props} /> :
            <Redirect to= "/" />
        )}
      />
    )
  }
  parseJson(){
   var data = this.state.photos;
   for (var i = 0; i < data.length; i++) {
    var obj = data[i];
  }
   return data.map((obj, key) =>
    <Highlight source={obj.src} link={obj.href} title={obj.title} desc={obj.desc} key={key} arrID={key} onClick={() => this.handleClick(obj)}/>
     )
 }


handleClick(obj){
  AppActions.setSelectedPhoto(obj);
  AppActions.photoViewerOn();
}

class App extends Component {
  render() {
    return (
      <div>
		      <Switch>
              <Route path="/" exact component={ Homepage } />
              <ProtectedRoute path = "/dashboard" component = {DashboardPage} />
              </Switch>
      </div>
    );
  }
}

export default App;
