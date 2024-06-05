import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos/1");
  };

  useEffect(() => {
    fetchData();
  }, [showNavbar]);

  return (
    <>
      <h1>App</h1>
      {showNavbar && <Navbar />}
      <button onClick={() => setShowNavbar((prev) => !prev)}>
        Navbar Toggle
      </button>
    </>
  );
};

export default App;
