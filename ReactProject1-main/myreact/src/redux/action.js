import { ADDTODO,REMOVETODO ,REMOVENEVER} from "./actionType"

export const addToDo = (task) => ({
    type: ADDTODO,
    payload:task,
})


export const removeToDo = (task) => ({
    type: REMOVETODO,
    payload:task,
})

export const removeNever = (task) => ({
    type: REMOVENEVER,
    payload:task,
})


