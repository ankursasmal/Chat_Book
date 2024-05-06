import {  createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"work list"}]
}
// create sliceses of funncility
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addtodo:(state,action)=>{
let todo={id:nanoid(),text:action.payload}
          state.todos.push(todo);
      },
        deletetodo:(state,action)=>{
state.todos=state.todos.filter((i)=> i.id!==action.payload)
        },
    }
})
// export all reducer function for use anywhere
export const {addtodo,deletetodo}=todoSlice.actions
export default todoSlice.reducer