import { useSelector, useDispatch } from "react-redux";
import { addToDo, removeToDo } from "./action";

export default function Todo() {
    const tasks = useSelector(state => state.todo);
    const dispatch = useDispatch();
    
    return (
        <>
            {
                tasks.map((item) => (
                    <div key={item.id}> {/* הוספת key עבור הרשימה */}
                        <p>{item.name}</p>
                        <p>{item.id}</p>
                        <button onClick={() => { dispatch(removeToDo(item.id)); }}>remove task</button> {/* כאן שים את item.id */}
                    </div>
                ))
                
            }
        </>
    );
}