import { TTodo } from "./Todo";
import TodoListItem from "./TodoListItem";

type TTodoList = {
  todos: TTodo[];
  toggleTodo: (id: string) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
};

const TodoList = ({ todos, toggleTodo, deleteTodo }: TTodoList) => {
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4">
        {todos &&
          todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
      </ul>
    </>
  );
};
export default TodoList;
