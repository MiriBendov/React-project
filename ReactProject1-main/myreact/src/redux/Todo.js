import { useSelector, useDispatch } from "react-redux";
import { addToDo, removeToDo } from "./action";
import React, { useState } from 'react';
import { ADDTODO } from "./actionType";
export default function Todo() {
    const tasks = useSelector(state => state.todo);
    const dispatch = useDispatch();
    const [name,setname]=useState();
    const [id,setid]=useState();
    
    return (
        <>
            {
                tasks.map((item) => (
                    <div key={item.id}> {/* הוספת key עבור הרשימה */}
                        <p>{item.name}</p>
                        <p>{item.id}</p>
                        <button onClick={() => { dispatch(removeToDo(item.id)); }}>remove task</button> 
                        
                    </div>
                ))
                
                
            }
            <input onBlur={(e)=>{setname(e.target.value)}} type="text" placeholder="name" />
            <input onBlur={(e)=>{setid(e.target.value)}} type="text" placeholder="Id"/>
            <button onClick={()=>{dispatch(addToDo({name:name,id:id}))}}>AddTask</button>
        </>
    );
}