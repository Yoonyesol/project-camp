import { TTodo } from "./Todo";
import TodoListItem from "./TodoListItem";

type TTodoListProps = {
  todos: TTodo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

function TodoList(props: TTodoListProps) {
  const { todos, toggleTodo, deleteTodo } = props;

  //useMemo를 이용해 함수를 메모이제이션 => 제대로 동작함을 확인
  // const memoToggleTodo = useMemo(() => toggleTodo, []);
  // const memoDeleteTodo = useMemo(() => deleteTodo, []);

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

export default TodoList;
