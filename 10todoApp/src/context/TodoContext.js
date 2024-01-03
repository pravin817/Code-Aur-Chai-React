// import the required modules
import { createContext, useContext } from "react";

// create the context
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "This is todo message",
      completed: false,
    },
  ],

  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// now use context

// This is the simple method
export const useTodo = () => {
  return useContext(TodoContext);
};

// export the provider

export const TodoProvider = TodoContext.Provider;
