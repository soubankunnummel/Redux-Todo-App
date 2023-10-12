import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    isEditing: null,  
    editedText: '', 
  },
  reducers: {
    addTodo: (state, action) => { 
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
      console.log(addTodo);
    },
    Delete: (state, action) => {
      const { payload: id } = action;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    ToggleCompleted: (state, action) => {
      const { payload: id } = action;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    startEditing: (state, action) => {
      state.isEditing = action.payload;
    
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        state.editedText = todo.text;
      }
    },
    saveEditing: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
   
      state.isEditing = null;
      state.editedText = '';
    },
    updateEditedText: (state, action) => {
      
      state.editedText = action.payload;
    },
   
  },
});

export const {
  addTodo,
  Delete,
  ToggleCompleted,
  startEditing,
  saveEditing,
  updateEditedText,
} = todoSlice.actions;
export default todoSlice.reducer;
