import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './data/data';

// require('normalize-css');
 require('./App.css');

ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);
