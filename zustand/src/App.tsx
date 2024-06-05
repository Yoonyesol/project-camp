import DecrementBtn from "./components/DecrementBtn";
import IncrementBtn from "./components/IncrementBtn";
import { useCountStore } from "./stores/countStore";

const App = () => {
  const count = useCountStore((state) => state.count);
  return (
    <div>
      <h1>App: {count}</h1>
      <IncrementBtn />
      <DecrementBtn />
    </div>
  );
};

export default App;
