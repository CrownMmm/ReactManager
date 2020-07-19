import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Life from './pages/demo/Life';
import * as serviceWorker from './serviceWorker';
// import Home from './pages/route_demo/route1/Home';
// import Router from './pages/route_demo/route2/router';
// import Router from './pages/route_demo/route3/router';
import Router from './router'


ReactDOM.render(
  <Router/>,
  document.getElementById('root')
);


serviceWorker.unregister();
