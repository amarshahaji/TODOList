import stringConstant from '../../constants/index';

// Action for add new item into todo list 
export function addNewTodoAction(payload) {
  return { type: stringConstant.ADD_NEW_ITEM_IN_TODO, payload: payload };
}
