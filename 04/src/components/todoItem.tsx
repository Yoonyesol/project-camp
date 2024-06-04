import Button from "./Button";

type TTodoItemProps = {
  checked: boolean;
  content: string;
};

export default function TodoItem({ content, checked }: TTodoItemProps) {
  return (
    <div
      className={`flex justify-between rounded-lg px-[16px] py-[14px] w-full h-full text-sm border-solid border-[1px] border-[#4f4f4f] bg-custom-grey-5`}
    >
      <input type="checkbox" className="cursor-pointer" />
      <span className={checked ? "line-through" : ""}>{content}</span>

      <Button
        type="button"
        width="23px"
        color="rgba(53, 56, 62, 0.10)"
        height="23px"
      >
        X
      </Button>
    </div>
  );
}
