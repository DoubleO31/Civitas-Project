import React from 'react';
import PropTypes from "prop-types";
import Auth from '../modules/Auth';


const Base = ({ children }) => (
  <div>


    { /* child component will be rendered here */ }
    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
