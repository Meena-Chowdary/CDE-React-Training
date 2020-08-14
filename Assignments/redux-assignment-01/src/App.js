import React from 'react';
import FirstName from "./container/firstname";
import Lastname from './container/lastname';
import Score from './container/score'
import Details from './container/details';
function App() {
  return (
    <div>
      <FirstName />
      <Lastname />
      <Score/>
      <Details/>
    </div>
  );
}

export default App;
