"use client";

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <h1>Blog error Component: {error.message}</h1>
      <button onClick={reset}>Try Again!</button>
    </>
  );
}
