import { useSelector, useDispatch } from "react-redux";
import { addToDo, removeToDo } from "../redux/action";
import React, { useState } from 'react';
import './styles.css'; // Import CSS styles

export default function Todo() {
    const tasks = useSelector(state => state.todo.todo);
    const dispatch = useDispatch();
    const [name, setname] = useState();
    const [id, setid] = useState();
    
    return (
        <div className="container">
            {
                tasks.map((item) => (
                    <div key={item.id} className="task-item"> {/* Applying styled class */}
                        <div>
                            <p>{item.name}</p>
                            <p>{item.id}</p>
                        </div>
                        <button onClick={() => { dispatch(removeToDo(item)); }}>Remove Task</button>
                    </div>
                ))
            }
            <p>Insert your task</p>
            <input onBlur={(e) => { setname(e.target.value); }} type="text" placeholder="Task" />
            <p>Insert your number</p>
            <input onBlur={(e) => { setid(e.target.value); }} type="text" placeholder="ID"/>
            <button onClick={() => { dispatch(addToDo({ name: name, id: id })) }}>Add Task</button>
        </div>
    );
}
