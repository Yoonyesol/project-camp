import React from "react";
import { useCountStore } from "../stores/countStore";

const DecrementBtn = () => {
  const decrement = useCountStore((state) => state.decrement);
  return (
    <div>
      <button onClick={decrement}>감소</button>
    </div>
  );
};

export default DecrementBtn;
