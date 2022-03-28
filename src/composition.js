export const Button = ({ color }) => {
  return <button style={{ backgroundColor: color }}>Hei du</button>;
};
export const DangerButton = () => {
  return <Button color="red" />;
};

export const withButton = (Component, partiallyAppliedProps) => {
  return (...props) => {
    return <Component {...partiallyAppliedProps} {...props} />;
  };
};
export const SuccessButton = withButton(Button, { color: "green" });
