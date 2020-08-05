import React from 'react';

import './App.css';
import Content from './components/content';
import Menu from './components/menu';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      Axios example
      <Content></Content>
    </div>
  );
}

export default App;
