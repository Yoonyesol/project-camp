import Input from "./html/Input";
import Button from "./html/Button";
import { useState } from "react";

type TTodoEditorProps = {
  addTodo: (text: string) => void;
};

export default function TodoEditor(props: TTodoEditorProps) {
  const { addTodo } = props;
  const [text, setText] = useState("");
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form action="" className="flex gap-2" onSubmit={onSubmitHandler}>
      <Input
        type="text"
        placeholder="Enter Todo List"
        value={text}
        onChange={onChangeHandler}
      />
      <Button type="submit" style={"w-[77px] bg-[#474747] text-white"}>
        Add
      </Button>
    </form>
  );
}
