import React from "react";

export default function Child({ count, setCount }) {
  return (
    <>
      <div>This is the Child comp</div>
      <div>This is the count prop from the line over: {count}</div>

      <button
        onClick={() => {
          setCount(count + count);
        }}
      >
        Double
      </button>
    </>
  );
}
