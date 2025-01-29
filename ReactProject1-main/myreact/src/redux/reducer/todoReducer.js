import { ADDTODO,REMOVETODO } from "../actionType";

const initialState={
    todo:[],
};


export const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADDTODO:
            return{...state, todo: [...state.todo, action.payload]};
        case REMOVETODO:
            const newarr=state.todo.filter(task =>{return task.id!==action.payload});
            return{...state,todo:newarr};
        default:
            return state;
    };
} ;