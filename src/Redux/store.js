import todoReducer from "./todoReducer";
import { configureStore } from "@reduxjs/toolkit";




const store = configureStore({
    reducer: {
        value: todoReducer
        
    }
})


export default store