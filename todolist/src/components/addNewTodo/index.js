import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodoAction } from "./add.action";

/**
 * Component for add new todo item
 */
export default function AddNewTodoItem() {
  const [todo, setNewTodo] = useState("");
  const [inputError, setInputError] = useState(false)
  const dispatch = useDispatch();

  const handleNewTodoName = (e) => {
    e.preventDefault();
    setNewTodo(e.target.value);
  };

  useEffect(()=> {
    if(todo?.length > 30){
      setInputError(true);
    } else {
      setInputError(false);
    }
  }, [todo])

  const submitForm = (e) => {
    e.preventDefault();
    if(todo?.length > 30){
      return;
    }
    const time = new Date();
    const data = {
      name: todo.trim(),
      time: time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
    };
    dispatch(addNewTodoAction(data));
    setNewTodo("");
  };

  return (
    <div className='mb-1'>
    <form
      onSubmit={(e) => submitForm(e)}
      className="item-center flex-direction-row"
    >
      <h3 className="mr-1">Add in TO-DO: </h3>
      <input
        placeholder='ENTER NEW TO-DO'
        className="input-box mr-6"
        onChange={handleNewTodoName}
        value={todo}
      ></input>
      
    </form>
    {inputError && (<div className='error-message'>The length of TO-DO should be less than 30</div>)}
    </div>
  );
}
