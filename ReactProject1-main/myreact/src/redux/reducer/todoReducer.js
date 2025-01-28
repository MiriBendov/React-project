import { ADDTODO,REMOVETODO } from "../actionType";
const initialState={
    todo:[{ id: 1, name: 'First Task' },],
};


export const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADDTODO:
            return{...state, todo: [...state.todo, action.payload]};
        case REMOVETODO:
            return{...state,todo: state.todo.filter(task=>task!=action.payload)};
        default:
            return state;
    };
} ;