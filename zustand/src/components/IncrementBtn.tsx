import React from "react";
import { useCountStore } from "../stores/countStore";

const IncrementBtn = () => {
  const increment = useCountStore((state) => state.increment);
  return (
    <div>
      <button onClick={increment}>감소</button>
    </div>
  );
};

export default IncrementBtn;
