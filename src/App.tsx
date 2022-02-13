import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(1)

  return (
    <div className="App">
      <h1>FizzBuzz React App</h1>
      <div>
        <span>{counter}</span>
      </div>
    </div>
  );
}

export default App;
