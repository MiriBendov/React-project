import { ADDTODO,REMOVETODO } from "../actionType";
const initialState={
    todo:[],
};


export const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADDTODO:
            return{...state, todo: [...state.todo, action.payload]};
        case REMOVETODO:
            return{...state,todo: action.payload.filter(task=>task!=action.payload.id)};
        default:
            return state;
    };
} ;