import React from "react";
import { ReducerAction } from "./App";

type ExampleTwoProps = {
  count: number;
  dispatch: React.Dispatch<ReducerAction>;
};

export default function ExampleTwo(props: ExampleTwoProps) {
  const { count, dispatch } = props;

  return (
    <>
      <h1>ExampleTwo Component : {count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT4", payload: 4 }); //payload는 숫자, 객체 등등 다양
        }}
      >
        증가+4
      </button>
    </>
  );
}
