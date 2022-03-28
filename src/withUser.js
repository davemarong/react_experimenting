export const withUser = (Component) => {
  return (props) => {
    const bro = {
      name: "Dave",
      age: 27,
      hairColor: "Black",
      hobbies: ["Football", "Bjj"],
    };

    return <Component {...props} user={bro} />;
  };
};
