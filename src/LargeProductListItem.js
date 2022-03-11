export const LargeProductListItem = ({ product }) => {
  const { name, price, description, rating } = product;
  return (
    <>
      <div>Name: {name}</div>
      <div>Price: {price}</div>
      <div>Description: {description}</div>
      <div>Rating: {rating}</div>
    </>
  );
};
