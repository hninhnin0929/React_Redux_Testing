import React, {useState} from "react"
import { selectTodo,addTodo } from "./todoSlice."
import { useAppSelector, useAppDispatch } from "../../app/hooks"

export default function ToDoListUI(){
    const todos = useAppSelector(selectTodo);
    const dispatch = useAppDispatch();
    const [newItem, setItem] = useState("");
    console.log("todos ",todos);

    let addToDoHandler = ()=> {
        console.log("Add Todo ", newItem);
        let item = {
            id: 3,
            text: newItem
        }
        dispatch(addTodo(item));
        setItem("");
    }

    return(
        <div>
            <h1>To Do List</h1>
            <form>
                <div className="row">
                    <div className="col-sm-6">
                        <input type="text" className="form-control col-sm-4"
                            value={newItem}
                            onChange={(e)=>setItem(e.target.value)}/>
                    </div>
                    <button type="button"
                        className="btn btn-primary col-sm-1"
                        onClick={addToDoHandler}>
                        Add
                    </button>
                </div>
            </form>
            <ul>
                {
                    todos.map((item)=><li key={item.id} className="form-row">
                        {item.text}
                    </li>)
                }
            </ul>
        </div>
    )
}