import React from "react";

const Parent = ({ children }) => {
  const child = React.cloneElement(children, {
    newProp: "some new prop from usual",
  });

  return child;
};

const Child = ({ newProp }) => <div>{newProp}</div>;

const Usual = () => (
  <Parent>
    <Child />
  </Parent>
);
export default Usual;
