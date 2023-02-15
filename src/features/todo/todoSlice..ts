import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ToDoItem {
    id: number,
    text: string
}
export interface ToDoList {
    items: Array<ToDoItem>
}
const initialState: ToDoList = {
    items: [
        {
            id: 1,
            text: "Task One"
        },
        {
            id: 2,
            text: "Task Two"
        }
   
    ]
};
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {

    }
});
export const selectTodo = (state: RootState) => state.todo.items;

export default todoSlice.reducer;
