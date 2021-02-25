import { combineReducers } from 'redux';
import todo from './todo.reducer'
//Combine the reducers
export const reducer =  combineReducers({
    todo : todo
})