import React from "react";

type TModalProps = {
  title: string;
  desc: string;
  children: React.ReactNode;
  width: number;
  height: number;
};

export default function Modal({
  title,
  desc,
  children,
  width,
  height,
}: TModalProps) {
  return (
    <div
      className={`rounded-lg bg-white w-[${width}px] h-[${height}px] flex flex-col py-[40px] px-[25px]`}
    >
      <div className="flex flex-col text-start mb-[20px] gap-y-[5px]">
        <h1 className="text-custom-grey">{title}</h1>
        <p className="text-sm text-custom-grey">{desc}</p>
      </div>
      <div className="flex text-center">{children}</div>
    </div>
  );
}
