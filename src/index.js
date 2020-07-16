import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Life from './pages/demo/Life';
import * as serviceWorker from './serviceWorker';
import Admin from './admin.js';


ReactDOM.render(
  <Admin/>,
  document.getElementById('root')
);


serviceWorker.unregister();
