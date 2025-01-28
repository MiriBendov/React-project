import { UseSelector,useDispatch, useSelector } from "react-redux";
import { addToDo,removeToDo } from "./action";


export default function Todo(){
    const tasks=useSelector(state=>state.todo);
    const dispatch=useDispatch();
    return(
        <>
        <ul>
             {
                tasks.map((item,id)=>(
                    <li>{item.name}</li>,
                    <li>{item.id}</li>
                ))
             }
        </ul>
        <button onClick={()=>{dispatch(removeToDo(id))}}>remove task</button>
        </>
    )
}