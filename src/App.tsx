import React, { FC, useState } from 'react';
import './App.css';
import FizzBuzz from './FizzBuzz';

type Props = {
  initialCount?: number
}

const App: FC<Props> = ({ initialCount }: Props) => {
  const [counter, setCounter] = useState(initialCount || 1)

  return (
    <div className="App">
      <h1>FizzBuzz React App</h1>
      <div>
        <button onClick={decrease}>-</button>
        <span>{counter}</span>
        <button onClick={increase}>+</button>
      </div>
      <FizzBuzz currentResult={counter} />
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
