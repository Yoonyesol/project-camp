import { useCallback, useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

export type TTodo = {
  id: string;
  text: string;
  completed: boolean;
};

export default function Todo() {
  const [todos, setTodos] = useState<TTodo[]>([]);

  const addTodo = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), text, completed: false },
    ]);
  };

  //Toggle - useCallback으로 최적화
  const toggleTodo = useCallback((id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        //completed만 변경해서 덮어씌우기(병합)
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  //Delete - useCallback으로 최적화
  const deleteTodo = useCallback((id: string) => {
    setTodos((prevTodos) => prevTodos.filter((it) => it.id !== id));
  }, []);

  return (
    <div className="w-[375px] bg-white py-10 px-6 text-[#4f4f4f] rounded-md">
      <h1 className="text-xl font-bold mb-[10px]">Todo List App</h1>
      <p className="text-sm mb-5">Please enter your details to continue.</p>
      {/* 작성 */}
      <TodoEditor addTodo={addTodo} />
      {/* 리스트 */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
