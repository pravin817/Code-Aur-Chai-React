import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const IncreaseCount = () => {
    if (count >= 20) {
      alert("Sorry You can't increase the value of count more than 20.");
    } else {
      setCount(count + 1);
    }
  };

  const DecraseCount = () => {
    if (count <= 0) {
      alert("Sorry You can't decrease the value of count less than 0.");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Code Aur React</h1>
      <h2>Counter : {count}</h2>
      <button onClick={IncreaseCount}>Increase Count : {count}</button>
      <button onClick={DecraseCount}>Decrease Count : : {count}</button>
      <p>Footer : {count}</p>
    </>
  );
}

export default App;
