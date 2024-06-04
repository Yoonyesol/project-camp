import { TTodo } from "./Todo";
import TodoListItem from "./TodoListItem";

type TTodoListProps = {
  todos: TTodo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export default function TodoList(props: TTodoListProps) {
  const { todos, toggleTodo, deleteTodo } = props;
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4">
        {todos.map((todo) => (
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
}
