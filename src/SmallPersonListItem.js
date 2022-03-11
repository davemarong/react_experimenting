export const SmallPersonListItem = ({ person }) => {
  const { name, age } = person;
  return (
    <div>
      <div>name: {name}</div>
      <div>age: {age}</div>
    </div>
  );
};
