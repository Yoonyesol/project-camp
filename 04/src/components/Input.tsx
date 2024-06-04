type TInputProps = React.ComponentProps<"input"> & {
  type: string;
  placeholder?: string;
};

export default function Input({ type, placeholder, height }: TInputProps) {
  return (
    <input
      className={`cursor-pointer rounded-lg px-[16px] py-[14px] w-full h-[${height}px] text-sm border-solid border-[1px] border-black`}
      type={type}
      placeholder={placeholder}
    ></input>
  );
}
