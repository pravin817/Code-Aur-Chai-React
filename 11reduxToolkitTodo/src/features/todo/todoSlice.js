import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
    },
  ],
};

function sayHello() {
  console.log("Hello");
}

// Now create the slice

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // It contains the properties and Function
    // we can define the functions above and pass the reference

    // addTodo: sayHello,
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      // we can simply apply the filter

      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});


// export the individual 
export const { addTodo, removeTodo } = todoSlice.actions;


export default todoSlice.reducer;