import React from "react";
import Parent from "./Parent";
import Child from "./Child";
const RenderProp = () => (
  <Parent renderProp={(props) => <Child newProp={props} />} />
);

export default RenderProp;
