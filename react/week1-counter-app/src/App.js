import React, {useState} from 'react';
import './App.css';

function App() {
  const[count, setCount] = useState(0);

  const increment = () => setCount(count+1);
  const decrement = () => setCount(count-1);
  const reset = () => setCount(0);

  return (
    <div className="App">
      <h1> Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increment}>➕ Increase</button>
      <button onClick={decrement}>➖ Decrease</button>
      <button onClick={reset}>🔁 Reset</button>
    </div>
  );
}

export default App;
