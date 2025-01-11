// src/App.js
import React, { useState } from 'react';
import "../App.css";

function CounterApp() {
    const [count, setCount] = useState(0);
    const [isToggled, setIsToggled] = useState(false)

    const increment = () => setCount (count + 1);  
    const decrement = () => setCount (count - 1);
    const reset = () => setCount (0);

    const toggle = () => setIsToggled(!isToggled);

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
      
    </div>
  );
}

export default CounterApp;