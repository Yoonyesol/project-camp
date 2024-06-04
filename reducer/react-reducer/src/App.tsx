import { useReducer } from "react";
import ExampleOne from "./ExampleOne";
import ExampleTwo from "./ExampleTwo";

export type ReducerAction = { type: string; payload: number };

const reducer = (state: number, action: ReducerAction) => {
  switch (action.type) {
    case "INCREMENT2":
      return state + action.payload;
    case "INCREMENT4":
      return state + action.payload;
    default:
      return state;
  }
};

export default function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <ExampleOne count={count} dispatch={dispatch} />
      <ExampleTwo count={count} dispatch={dispatch} />
    </div>
  );
}
