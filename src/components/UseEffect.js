import React, { useEffect } from "react";
import { useState } from "react";

const UseEffect = () => {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };

  const decrement = () => {
    setcount(count - 1);
  };

  useEffect(() => {
    console.log("count is : " + count);
  },[count])

  return (
    <div>
      <h1>UseEffect</h1>
        <h1>count is : {count}</h1>
      <button onClick={increment}>Increment</button>
      <br/>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default UseEffect;
