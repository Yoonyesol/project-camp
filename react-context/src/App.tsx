import React, { createContext, useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";

type CountContextType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export const CountContext = createContext<CountContextType | null>(null);

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountContext.Provider value={{ count, setCount }}>
        <Navbar />
        <Home />
      </CountContext.Provider>
    </>
  );
}
