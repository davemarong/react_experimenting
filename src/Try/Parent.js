import React, { useState } from "react";

export default function Parent({ children }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>I am the parent. Count: {count}</div>
      <div>
        {" "}
        This is the children with an extra prop:{" "}
        {React.cloneElement(children, {
          count: count,
          setCount: setCount,
        })}{" "}
      </div>
    </div>
  );
}
