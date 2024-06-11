const getMovieList = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWRhNTczZDk3NTc2ZDUxNGM3NTYyZjNjMjI3NzgxYiIsInN1YiI6IjY1N2MxMjQwZTkzZTk1MjE4ZjZkMjM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HkyRzjy-li0pLAqbjEVApq9hBDG6TlLdtJ56YuttHeU",
    },
  };

  return await (await fetch(url, options)).json();
};

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
};

export default async function Server() {
  //   const posts = await getPosts();
  //   const movieList = await getMovieList();
  const { results } = await getMovieList();

  return (
    <>
      <h1>Server Component</h1>
      {/* <pre>{posts && JSON.stringify(posts, null, 2)}</pre> */}
      <pre>{results && JSON.stringify(results, null, 2)}</pre>
    </>
  );
}
