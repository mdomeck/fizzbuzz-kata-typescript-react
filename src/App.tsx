import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(1)

  return (
    <div className="App">
      <h1>FizzBuzz React App</h1>
      <div>
        <button onClick={decrease}>-</button>
        <span data-testid='counter'>{counter}</span>
        <button onClick={increase}>+</button>
      </div>
      <span data-testid='result'>{result()}</span>
    </div>
  );

  function increase() {
    setCounter(count => count + 1)
  }

  function decrease() {
    if (counter > 1)
      setCounter(count => count - 1)
  }

  function result() {
    if (multOfThree()) {
      return 'Fizz'
    }
    return counter
  }

  function multOfThree() {
    return counter % 3 === 0
  }
}

export default App;
