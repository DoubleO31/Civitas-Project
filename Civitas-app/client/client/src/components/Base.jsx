import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';
import Menubar from './Menubar.jsx';
import Profilepic from './Profilepic.jsx';
import UploadButton from './UploadButton.js';


const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div><IndexLink to="/">
        <Menubar/></IndexLink>
      </div>

      {Auth.isUserAuthenticated() ? (
        <div>
        <Profilepic/>
        <Link to="/logout">Log out</Link>
        <UploadButton/>
        </div>
      ) : (
        <div className="top-bar-left">
          <Link to="/login">Log in</Link>
        </div>
      )}


    </div>

    { /* child component will be rendered here */ }
    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
