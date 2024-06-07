"use client";

import { usePathname } from "next/navigation";

export default function Login() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <h1>Login Component</h1>
    </>
  );
}
