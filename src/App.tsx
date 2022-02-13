import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(1)

  return (
    <div className="App">
      <h1>FizzBuzz React App</h1>
      <div>
        <button onClick={decrease}>-</button>
        <span>{counter}</span>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );

  function increase() {
    setCounter(count => count + 1)
  }

  function decrease() {
    if (counter > 1)
      setCounter(count => count - 1)
  }
}

export default App;
