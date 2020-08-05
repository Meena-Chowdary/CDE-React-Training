import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import RootComponent from './Components/RootComponent';

ReactDOM.render(
  <HashRouter>
    <RootComponent></RootComponent>
  </HashRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
