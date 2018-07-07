import React from "react";
import img from '../logo.png';

class Menubar extends React.Component {
  constructor(props){
    super(props);
  }



  render() {
    return (
      <div>
      <div className="top-menu-container">
          <img className="logo-picture"
            id="logo-picture"
            src={img}
            alt="logo"
          />
      </div>
      <div className="titles-container">
      <span id="site-heading">
      </span>

      <span id="site-subheading">
      </span>
      </div>


      </div>
    );
  }
}

export default Menubar;
