import React from "react";

export default function Child({ count, setCount }) {
  return (
    <>
      {" "}
      <span> This is the Child comp. This is the count: {count} </span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </>
  );
}
