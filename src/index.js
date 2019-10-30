import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/styles.scss';
import App from 'App';
import * as serviceWorker from 'serviceWorker';
import { BrowserRouter } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import * as fasIcons from 'utils/icons';

library.add(fab, fasIcons);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
