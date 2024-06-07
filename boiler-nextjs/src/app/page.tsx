"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const router = useRouter();
  console.log(router);

  const onClickHandler = () => {
    console.log("click");
  };
  return (
    <div>
      page<button onClick={onClickHandler}>클릭</button>
    </div>
  );
}
