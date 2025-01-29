import { REMOVETODO } from "../actionType";
import { REMOVENEVER } from "../actionType";
import { ADDTODO } from "../actionType";
const initialState={
    arrRecircle:[],
};


export const recicleBinReducer=(state=initialState,action)=>{
    switch(action.type){
        case REMOVETODO:
            return{...state, arrRecircle: [...state.arrRecircle, action.payload]};
        case REMOVENEVER:
             const newarr=state.arrRecircle.filter(task =>{return task.id!==action.payload.id});
             return{...state,arrRecircle:newarr};
        case ADDTODO:
             const newarr1=state.arrRecircle.filter(task =>{return task.id!==action.payload.id});
             return{...state,arrRecircle:newarr1};
        default:
            return state;
    };
} ;