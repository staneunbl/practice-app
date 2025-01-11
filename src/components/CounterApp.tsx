// src/App.js
import React, { useState } from 'react';
import "../App.css";

function CounterApp() {
    const [count, setCount] = useState(0);
    const [isToggled, setIsToggled] = useState(false)
    const [number, setNumber] = useState<number|null>(null);

    const increment = () => setCount (count + 1);  
    const decrement = () => setCount (count - 1);
    const reset = () => setCount (0);

    const toggle = () => setIsToggled(!isToggled);

    const generateRandomNumber = () => {
      const number = Math.floor(Math.random() * 100) + 1;
      setNumber(number);
    }

    const isEven = (num: number) => {
      return num % 2 === 0
    }

    const handleEvenOrOdd = () => {
      if (number !== null) {
        if (isEven(number)) {
          return <p>The number is Even</p>;
        } else {
          return <p>The number {number} is Odd</p>;
        }
      }
    };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div>
        <p>Current count: {count}</p>
      </div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <p>The toggle state is: {isToggled ? "ON" : "OFF"}</p>
        <button onClick={toggle}>Toggle</button>
      </div>

      <button onClick={generateRandomNumber}> Generate Random Number</button>
      {number !== null && <p>Random Number: {number}</p>}{number}
      {handleEvenOrOdd()}
    </div>
  );
}

export default CounterApp;