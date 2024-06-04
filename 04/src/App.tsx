import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TodoList from "./pages/TodoList";

export default function App() {
  const [inputStr, setInputStr] = useState<string>("");

  return (
    <>
      {/* <LoginPage /> */}
      <SignUpPage />
      {/* <TodoList /> */}
    </>
  );
}
