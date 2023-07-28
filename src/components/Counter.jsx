import React, { useState, useEffect } from "react";

const Counter = (props) => {
  const { value = 0 } = props;
  const [counter, setCounter] = useState(value);

  const handleIncrement = () => setCounter(counter + 1);
  const handleDecrement = () => setCounter(counter - 1);

  useEffect(() => {
    console.log("Counter component loaded");
  }, []);

  return (
    <>
      <div data-testid="count">{counter}</div>
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </>
  );
};

export default Counter;
