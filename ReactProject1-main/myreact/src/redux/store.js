import { createStore, combineReducers, applyMiddleware } from 'redux';
import { todoReducer } from './reducer/todoReducer';
import { recicleBinReducer } from './reducer/recicleBinReducer';
import logger from 'redux-logger';
import { ifNull } from './middlewares/ifNull';

const rootReducer = combineReducers({
    todo: todoReducer,
    recicle: recicleBinReducer,
});
export const store = createStore(rootReducer, applyMiddleware(logger, ifNull));
console.log(store.getState());





