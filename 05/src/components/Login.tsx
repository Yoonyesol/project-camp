import Input from "./html/Input";
import CheckBox from "./html/CheckBox";
import Button from "./html/Button";
import React, { useState } from "react";

export default function Login() {
  const [action, setAction] = useState<"Login" | "Sign">("Login");
  const [name, setName] = useState("");
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const [email, setEmail] = useState("");
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const [agree, setAgree] = useState(false);
  const onChangeAgree = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgree(e.target.checked);
  };

  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const emailRef = useRef<HTMLInputElement>(null);
  //   const passwordRef = useRef<HTMLInputElement>(null);

  const onClickSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (action === "Sign" && name.trim() === "") {
    //   nameRef.current?.focus();
    //   return;
    // } else if (email.trim() === "") {
    //   emailRef.current?.focus();
    //   return;
    // } else if (password.trim() === "") {
    //   passwordRef.current?.focus();
    //   return;
    // }

    if (!isValid()) {
      alert(`${action} Success!`);
    } else {
      alert("invalid input, please check again!");
    }

    // alert(
    //   `${
    //     action === "Sign" ? `이름: ${name}` : ""
    //   } 이메일:${email} 비밀번호:${password}`
    // );

    // nameRef.current!.value = "";
    // emailRef.current!.value = "";
    // passwordRef.current!.value = "";
  };

  const onClickHandler = () => {
    setAction(action === "Login" ? "Sign" : "Login");
  };

  const isValid = () => {
    const loginValid = email.trim() === "" || password.trim() === "" || !agree;
    return action === "Login" ? loginValid : loginValid || name.trim() === "";
  };

  return (
    <div className="w-[375px] bg-white py-10 px-6 text-[#4f4f4f] rounded-md">
      <h1 className="text-xl font-bold mb-[10px]">{action} Into App</h1>
      <p className="text-sm mb-5">Please enter your details to continue.</p>
      <form action="" className="flex flex-col gap-4" onSubmit={onClickSubmit}>
        {action === "Sign" && (
          <Input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            // ref={nameRef}
            onChange={onChangeName}
            required
          />
        )}
        <Input
          type="text"
          placeholder="someone@example.com"
          value={email}
          onChange={onChangeEmail}
          required
        />
        <Input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={onChangePassword}
          required
        />
        <CheckBox checked={agree} onChange={onChangeAgree}>
          <span>
            I agree with <b>terms</b> and <b>policies.</b>
          </span>
        </CheckBox>
        <Button type="submit" disabled={isValid()}>
          {action === "Login" ? "Log In" : "Sign In"}
        </Button>
        <Button
          type="submit"
          style="border border-[#4f4f4f]"
          onClick={onClickHandler}
        >
          Go To {action === "Login" ? "Sign" : "Login"}
        </Button>
      </form>
    </div>
  );
}
