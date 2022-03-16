import React, { FC, useState } from 'react';
import './App.css';
import Result from './result';

type Props = {
  currentResult: number
}

const App: FC<Props> = ({ currentResult }: Props) => {
  const [counter, setCounter] = useState(currentResult)

  return (
    <div className="App">
      <h1>FizzBuzz React App</h1>
      <div>
        <button onClick={decrease}>-</button>
        <span>{counter}</span>
        <button onClick={increase}>+</button>
      </div>
      <Result currentResult={counter} />
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
