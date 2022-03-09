import { SplitScreen } from "./SplitScreen";

const Left = () => {
  return <h1 style={{ backgroundColor: "red" }}>Leftside</h1>;
};

const Right = () => {
  return <h1 style={{ backgroundColor: "green" }}>Rightside</h1>;
};

function App() {
  return (
    <div>
      <SplitScreen rightWeight={2} leftWeight={4}>
        <Left />
        <Right />
      </SplitScreen>
    </div>
  );
}

export default App;
