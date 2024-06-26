import { useEffect } from "react";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";
import { useTodoStore } from "../stores/todoStore";

const Todo = () => {
  const fetchTodos = useTodoStore((state) => state.fetchTodos);

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <>
      <div className="w-[375px] bg-white py-10 px-6 text-[#4b4b4b]">
        <h1 className="text-xl font-bold mb-[10px]"> Todo Into App</h1>
        <p className="text-sm mb-5">Please enter your details to continue.</p>
        {/* 등록 */}
        <TodoEditor />
        {/* 리스트 */}
        <TodoList />
      </div>
    </>
  );
};
export default Todo;
