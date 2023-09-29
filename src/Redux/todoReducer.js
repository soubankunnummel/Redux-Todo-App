import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      // Use immer to update the state immutably
      state.push({
        id: Date.now(),
        text: action.payload, 
        completed: false,
      });
    },
    Delete: (state, action) => { 
        console.log(action.payload); 
        return state.filter((todo) => todo.id !== action.payload)

    },
    Edit: (state,action) => {
        const {id,text} = action.payload
        const todo = state.find((todo) => todo.id === id)
        if(todo){
            todo.text = text
        }

    },
    ToggleCompleted: (state, action) => {
     
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        }
      }
      
  },
});

export const { addTodo,Delete, Edit, ToggleCompleted} = todoSlice.actions;
export default todoSlice.reducer;
