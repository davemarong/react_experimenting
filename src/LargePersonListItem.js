export const LargePersonListItem = ({ person }) => {
  const { name, age, hairColor } = person;
  return (
    <div>
      <div>name: {name}</div>
      <div>age: {age}</div>
      <div>hairColor: {hairColor}</div>
    </div>
  );
};
