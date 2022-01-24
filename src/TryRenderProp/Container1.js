import React from "react";
import Parent from "./Parent";
import Child from "./Child";

export default function Container1() {
  return (
    <>
      <Parent
        renderProp={(count, setCount) => (
          <Child count={count} setCount={setCount} />
        )}
      />
    </>
  );
}
