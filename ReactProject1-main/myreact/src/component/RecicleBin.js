import { useSelector, useDispatch } from "react-redux";
import { addToDo, removeToDo, removeNever } from "../redux/action";
import React from 'react';
import './styles.css'; // Import CSS styles

export default function RecicleBin() {
    const tasks = useSelector(state => state.recicle.arrRecircle);
    const dispatch = useDispatch();
    
    return (
        <div className="container">
            {
                tasks.map((item) => (
                    <div key={item.id} className="task-item"> {/* Applying styled class */}
                        <div>
                            <p>{item.name}</p>
                            <p>{item.id}</p>
                        </div>
                        <div>
                            <button onClick={() => { dispatch(removeNever(item)); }}>Remove</button> 
                            <button onClick={() => { dispatch(addToDo(item)); }}>Restore</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}