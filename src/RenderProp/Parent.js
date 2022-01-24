const Parent = ({ renderProp }) => {
  const newProp = "some new prop from render prop";

  return renderProp(newProp);
};
export default Parent;
