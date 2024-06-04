import { useContext } from "react";
import { CountContext } from "./App";

export default function Home() {
  const context = useContext(CountContext);
  return (
    <>
      <h1>Home {context?.count}</h1>
    </>
  );
}
