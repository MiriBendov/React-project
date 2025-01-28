import { ADDTODO,REMOVETODO } from "./actionType"

export const addToDo = (task) => ({
    type: ADDTODO,payload:task,
})


export const removeToDo = (id) => ({
    type: REMOVETODO,payload:id,
})