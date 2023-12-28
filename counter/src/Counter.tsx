import React from "react";

function Counter(props: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <h3>count: {props.count}</h3>
      <button
        onClick={() => {
          props.setCount((prevCount) => prevCount + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          props.setCount((prevCount) => prevCount - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default Counter;

