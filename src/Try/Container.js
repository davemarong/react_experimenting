import React from "react";
import Parent from "./Parent";
import Child from "./Child";

export default function Container() {
  return (
    <Parent>
      <Child />
    </Parent>
  );
}
