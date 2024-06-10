const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
};

export default async function Server() {
  const posts = await getPosts();
  return (
    <>
      <h1>Server Component</h1>
      <pre>{posts && JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
