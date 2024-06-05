import axios from "axios";
import { useState } from "react";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchDataAsync = async () => {
    try {
      const response = await fetch("http://localhost:4000/todos");
      const data = await response.json();
      setTodos(data);
      console.log(data);
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  };

  const fetchData = () => {
    fetch("http://localhost:4000/todos")
      .then((response) => {
        return response.json(); //Promise 객체로 출력됨
      })
      .then((data) => {
        //처리 결과를 두번째 then으로 받아야 한다.
        console.log(data);
        setTodos(data);
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  };

  const fetchAdd = async () => {
    const response = await fetch("http://localhost:4000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: "Learn React" }),
    });

    if (response.ok) {
      //성공 로직
      alert("데이터가 추가되었습니다");
    }
  };

  const fetchToggle = async () => {
    await fetch(
      "http://localhost:4000/todos/a533fb92-0ee5-4f15-a75a-852790e58944",
      { method: "PATCH" }
    );
  };

  const fetchDelete = async () => {
    await fetch(
      "http://localhost:4000/todos/a533fb92-0ee5-4f15-a75a-852790e58944",
      { method: "DELETE" }
    );
  };

  const axiosGet = () => {
    axios
      .get("http://localhost:4000/todos")
      .then(function (response) {
        console.log(response);
        setTodos(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log("dd");
      });
  };

  const axiosAsyncGet = async () => {
    try {
      const response = await axios.get("http://localhost:4000/todos");
      setTodos(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const axiosPost = async () => {
    try {
      await axios.post("http://localhost:4000/todos", {
        text: "Learn Axios",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const axiosPatch = async () => {
    try {
      await axios.patch(
        "http://localhost:4000/todos/c79081d4-185a-469f-b1d0-d098eb3f3929"
      );
    } catch (err) {
      console.log(err);
    }
  };

  const axiosDelete = async () => {
    try {
      await axios.delete(
        "http://localhost:4000/todos/c79081d4-185a-469f-b1d0-d098eb3f3929"
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>App</h1>
      <button onClick={fetchData}>Fetch API</button>
      <button onClick={fetchDataAsync}>Async API</button>
      <button onClick={fetchAdd}>Fetch Add</button>
      <button onClick={fetchToggle}>Fetch Toggle</button>
      <button onClick={fetchDelete}>Fetch Delete</button>
      <br />
      <br />
      <br />
      <button onClick={axiosGet}>Axios Get</button>
      <button onClick={axiosAsyncGet}>Axios Async Get</button>
      <button onClick={axiosPost}>Axios Async Post</button>
      <button onClick={axiosPatch}>Axios Async Patch</button>
      <button onClick={axiosDelete}>Axios Async Delete</button>
      <br />
      <br />
      <br />
      {JSON.stringify(todos)}
    </>
  );
}
