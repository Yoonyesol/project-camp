import { useState } from "react";
import Button from "./html/Button";
import Input from "./html/Input";
import { Action } from "../reducer/todoReducer";

type TodoEditorProps = {
  dispatch: React.Dispatch<Action>;
};

const TodoEditor = ({ dispatch }: TodoEditorProps) => {
  const [text, setText] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setText("");
  };

  // Add
  const addTodo = (text: string) => {
    dispatch({
      type: "ADD_TODO",
      payload: text,
    });
  };

  return (
    <>
      <form action="" className="flex gap-2" onSubmit={onSubmitHandler}>
        <Input
          type="text"
          placeholder="Enter Your Todo"
          value={text}
          onChange={onChangeHandler}
        />
        <Button
          type="submit"
          style={"w-[77px] bg-[#4F4F4F] text-white"}
          onClick={() => addTodo(text)}
        >
          Add
        </Button>
      </form>
    </>
  );
};
export default TodoEditor;
