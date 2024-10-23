import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ title: action.payload, id: Date.now() });
    },
    editTodo: (state, action) => {
      state.map((todos) => {
        if (todos.id == action.payload.id) {
          return (todos.title = action.payload.title);
        }
      });
    },
    deleteTodo: (state, action) =>
      state.filter((todos) => todos.id !== action.payload),
  },
});
export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;