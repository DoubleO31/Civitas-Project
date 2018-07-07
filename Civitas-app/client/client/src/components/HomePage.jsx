import React from 'react';
import AppStore from '../Stores/AppStore.js';
import Highlight from './Highlight.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import UploadButton from './UploadButton.js';
import UploadWindow from './UploadWindow.js';
import PhotoViewer from './PhotoViewer.js';
import AppActions from '../Action/AppActions.js';
import WowButton from './WowButton.jsx';
import { Card, CardTitle } from 'material-ui/Card';


const HomePage = () => (
  <Card className="container">
    <CardTitle title="React Application" subtitle="This is the home page." />
  </Card>
);

export default HomePage;
