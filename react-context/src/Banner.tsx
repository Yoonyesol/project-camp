import { useContext } from "react";
import { CountContext } from "./context/CounterContext";

export default function Banner() {
  const context = useContext(CountContext);
  return (
    <>
      <h1>Banner {context?.count}</h1>
      <button
        onClick={() => {
          context?.setCount((prevCnt) => prevCnt + 1);
        }}
      >
        증가
      </button>
    </>
  );
}
