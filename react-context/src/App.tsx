import Navbar from "./Navbar";
import Home from "./Home";
import { CounterProvider } from "./context/CounterContext";

export default function App() {
  return (
    <>
      <CounterProvider>
        <Navbar />
        <Home />
      </CounterProvider>
    </>
  );
}
