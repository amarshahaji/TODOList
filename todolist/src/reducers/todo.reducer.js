import stringConstant from "../constants/index";

const initialState = {
  todoListArray: [],
  tempSearchList: [],
  searchWord: "",
};

// reducer function to udate the state of data
export default function todo(state = initialState, action) {
  switch (action.type) {
    case stringConstant.ADD_NEW_ITEM_IN_TODO:
      let tempTodoList = state.todoListArray;
      tempTodoList.push(action.payload);
      return {
        ...state,
        todoListArray: [...tempTodoList],
      };
    case stringConstant.SORT_TODO_BY_NAME:
      let sortByNameList = state.todoListArray.sort(sortByName);
      return {
        ...state,
        todoListArray: [...sortByNameList],
      };
    case stringConstant.SORT_TODO_BY_TIME:
        let sortByTimeList = state.todoListArray.sort(sortByTime);
        return {
          ...state,
          todoListArray: [...sortByTimeList],
        };
    case stringConstant.SEARCH_WORD:
      return {
        ...state,
        searchWord: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

function sortByName(firstObj, secondObj) {
  const firstName = firstObj.name.toUpperCase();
  const secondName = secondObj.name.toUpperCase();
  return sort(firstName, secondName);
}

function sortByTime(firstObj, secondObj){
  const time1 = firstObj.time.toUpperCase();
  const time2 = secondObj.time.toUpperCase();
  return sort(time1, time2);
}

function sort(value1, value2) {
  let comparison = 0;
  if (value1 > value2) {
    comparison = 1;
  } else if (value1 < value2) {
    comparison = -1;
  }
  return comparison;
}
