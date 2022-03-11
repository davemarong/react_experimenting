export const SmallProductListItem = ({ product }) => {
  const { name, price } = product;
  return (
    <>
      <div>Name: {name}</div>
      <div>Price: {price}</div>
    </>
  );
};
