import ServerOne from "@/components/ServerOne";
import ServerTwo from "@/components/ServerTwo";
import { Suspense } from "react";

export default function About() {
  return (
    <>
      <h1>About Component</h1>
      <Suspense fallback={<h1>suspense one loading...</h1>}>
        <ServerOne />
      </Suspense>
      <Suspense fallback={<h1>suspense two loading...</h1>}>
        <ServerTwo />
      </Suspense>
    </>
  );
}
