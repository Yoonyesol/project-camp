"use client";

import { useEffect, useState } from "react";

export default function Client() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <h1>Client Component</h1>
      {isLoading ? "Loading..." : <pre>{JSON.stringify(posts, null, 2)}</pre>}
    </>
  );
}
