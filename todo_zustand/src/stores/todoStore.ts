import { create } from "zustand";
import axios from "axios";
import { axiosInstance } from "../libs/http";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

type TodoStoreType = {
  todos: Todo[];
  fetchTodos: () => void;
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

export const useTodoStore = create<TodoStoreType>((set) => ({
  todos: [],
  fetchTodos: async () => {
    // api call
    const response = await axiosInstance.get("/todos");
    if (response.status === 200) {
      set({ todos: response.data });
    }
  },
  addTodo: async (text) => {
    // api call
    const response = await axiosInstance.post("/todos", {
      text,
    });

    if (response.status === 200) {
      set((state) => ({
        todos: [...state.todos, response.data],
      }));
    }
  },
  toggleTodo: async (id) => {
    // api call
    const response = await axiosInstance.patch("/todos/" + id);
    if (response.status === 200) {
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      }));
    }
  },
  removeTodo: async (id) => {
    // api call
    const response = await axiosInstance.delete("/todos/" + id);
    if (response.status === 200) {
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      }));
    }
  },
}));
