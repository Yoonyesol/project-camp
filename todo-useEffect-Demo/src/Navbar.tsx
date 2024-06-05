import { useEffect } from "react";

const Navbar = () => {
  //useEffect Hook
  useEffect(() => {
    console.log("Navbar useEffect");

    return () => {
      console.log("Navbar cleanup");
    };
  }, []);
  return <div>Navbar</div>;
};

export default Navbar;
