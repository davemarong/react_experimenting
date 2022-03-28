import { SplitScreen } from "./SplitScreen";

const Left = () => {
  return <h1>Left</h1>;
};
const Right = () => {
  return <h1>Right</h1>;
};

function App() {
  return (
    <div>
      <SplitScreen rightSize={3} leftSize={1}>
        <Left />
        <Right />
      </SplitScreen>
    </div>
  );
}

export default App;
