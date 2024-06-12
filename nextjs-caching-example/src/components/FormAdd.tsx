"use client";

import { insertMongoDB, serverAction } from "@/libs/action";
import { useRef } from "react";
export default function FormAdd() {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <>
      <form
        ref={ref}
        action={async (formData) => {
          await insertMongoDB(formData);
          ref.current?.reset();
        }}
        className="w-[300px]"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          className="border border-gray-300 rounded-md p-2 block mb-4 w-full"
        />
        <input
          type="text"
          name="email"
          placeholder="Enter Your Email"
          className="border border-gray-300 rounded-md p-2 block mb-4 w-full"
        />
        <button className="bg-blue-500 text-white p-2 rounded-md mt-2 block w-full">
          Save
        </button>
      </form>
    </>
  );
}
