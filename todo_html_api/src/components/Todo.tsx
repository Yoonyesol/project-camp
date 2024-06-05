import { useEffect, useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

export type TTodo = {
  id: string;
  text: string;
  completed: boolean;
};

const Todo = () => {
  const [todos, setTodos] = useState<TTodo[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/todos");
      const data = await response.json();
      setTodos(data);
    } catch (err) {
      console.log(err);
    }
  };

  const addTodo = async (text: string) => {
    try {
      await fetch("http://localhost:4000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
    } catch (err) {
      console.log(err);
    }

    fetchData();
  };

  const toggleTodo = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:4000/todos/${id}`, {
        method: "PATCH",
      });

      //화면 변경, axios일 경우는 response.statusText === "OK"로 확인
      if (response.ok) {
        setTodos((prev) =>
          prev.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:4000/todos/${id}`, {
        method: "DELETE",
      });

      //화면 변경
      if (response.ok) {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  // GET
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-[375px] bg-white py-10 px-6 text-[#4b4b4b]">
        <h1 className="text-xl font-bold mb-[10px]"> Todo Into App</h1>
        <p className="text-sm mb-5">Please enter your details to continue.</p>
        {/* 등록 */}
        <TodoEditor addTodo={addTodo} />
        {/* 리스트 */}
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
};
export default Todo;
