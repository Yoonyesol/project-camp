import React from "react";
import { ReducerAction } from "./App";

type ExampleOneProps = {
  count: number;
  dispatch: React.Dispatch<ReducerAction>;
};
export default function ExampleOne(props: ExampleOneProps) {
  const { count, dispatch } = props;

  return (
    <>
      <h1>ExampleOne Component : {count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT2", payload: 2 }); //payload는 숫자, 객체 등등 다양
        }}
      >
        증가+2
      </button>
    </>
  );
}
