import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortListByName, sortListByTime } from "./sort.action";
/**
 * Component for show the todo list
 */
export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoListArray);
  const searchWord = useSelector((state) => state.todo.searchWord);
  const [todoListArray, setTodoList] = useState([]);
  useEffect(() => {
    if (searchWord?.length > 3) {
      const tempTodoList = todoList.filter((item) => item.name.toUpperCase() === searchWord.toUpperCase());
      setTodoList(tempTodoList);
    }
  }, [searchWord]);

  useEffect(() => {
    if (
      searchWord === "" ||
      searchWord === null ||
      searchWord?.length < 0
    ) {
      setTodoList(todoList);
    }
  }, [todoList, searchWord]);


  return (
    <div className='item-center'>
      {todoListArray?.length > 0 && (
        <table className='table-wrapper'>
          <tr>
            <th className='table-data'>
              TO-DO NAME <button className='btn-primary ml-1' onClick={() => dispatch(sortListByName())}>SORT</button>
            </th>
            <th className='table-data'>CREATE TIME <button className='btn-primary ml-1' onClick={() => dispatch(sortListByTime())}>SORT</button></th>
          </tr>
          {todoListArray.map((item, itemId) => (
            <tr key={itemId}>
              <td className='table-data'>{item.name}</td>
              <td className='table-data'>{item.time}</td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
}
