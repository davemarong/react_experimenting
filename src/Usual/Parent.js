import React from "react";

const Parent = ({ children }) => {
  const Child = React.cloneElement(children, {
    newProp: "some new prop from usual",
  });

  return <Child />;
};

export default Parent;
