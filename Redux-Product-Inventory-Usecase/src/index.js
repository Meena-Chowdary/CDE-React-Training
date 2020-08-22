import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allreducer from './reducers/allreducers';

const store=createStore(allreducer)

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </HashRouter>
  ,
  document.getElementById('root')
);

