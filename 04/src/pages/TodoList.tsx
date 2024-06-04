import Button from "../components/Button";
import Input from "../components/Input";
import Modal from "../components/modal";
import TodoItem from "../components/todoItem";

export default function TodoList() {
  return (
    <Modal
      width={375}
      height={434}
      title="Todo List App"
      desc="Please enter your details to continue."
    >
      <form className="flex flex-col">
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-[10px]">
            <Input
              type="text"
              placeholder="Enter Todo List"
              width={325}
              height={44}
            />
            <Button type="button" fontColor="white" height="50px">
              Add
            </Button>
          </div>
          <TodoItem content="Your task here..." checked={true} />
          <TodoItem content="Your task here..." checked={false} />
          <TodoItem content="Your task here..." checked={false} />
          <TodoItem content="Your task here..." checked={false} />
          <TodoItem content="Your task here..." checked={false} />
        </div>
      </form>
    </Modal>
  );
}
