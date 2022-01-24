import React, { useState } from "react";

export default function Parent({ renderProp }) {
  const [count, setCount] = useState(1);
  return (
    <div>
      <div>This is the parent comp</div>
      <div>Count is {count}</div>
      <div>This is the children/render prop:{renderProp(count, setCount)} </div>
    </div>
  );
}
