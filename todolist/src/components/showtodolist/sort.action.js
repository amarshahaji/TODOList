import stringConstant from '../../constants/index';

// Action for sort the todo list by name
export function sortListByName(){
    return{type: stringConstant.SORT_TODO_BY_NAME}
}


// Action for sort the todo list by time
export function sortListByTime(){
    return{type: stringConstant.SORT_TODO_BY_TIME}
}