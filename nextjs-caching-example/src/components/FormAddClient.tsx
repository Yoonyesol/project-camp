"use client";

import { invalidData } from "@/libs/action";
import { FormEventHandler, useState } from "react";

export default function FormAddClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        console.log(response);
        invalidData();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form action="" className="w-[300px]" onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={name}
          onChange={onChangeName}
          name="name"
          placeholder="Enter Your Name"
          className="border border-gray-300 rounded-md p-2 block mb-4 w-full"
        />
        <input
          type="text"
          value={email}
          onChange={onChangeEmail}
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
