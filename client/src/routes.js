import Base from './Component/Base.jsx';
//import HomePage from './component/HomePage.jsx';
import DashboardPage from './Component/Dashboard/DashboardPage.jsx';
import LoginPage from './Component/Login/LoginPage.jsx';
import Auth from './modules/Auth';


const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, DashboardPage);
        } else {
          callback(null, LoginPage);
        }
      }
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        console.log("reach here");
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    }

  ]
};

export default routes;
