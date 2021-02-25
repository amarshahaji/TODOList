import './App.css';

import AddNewTodoItem from '../src/components/addNewTodo';
import TodoList from '../src/components/showtodolist/index';
import SearchTodo  from '../src/components/searchTodoList/index';

function App() {
  return (
    <div className="App">
      <h2 className='mb-2'>My TO-DO List</h2>
      <hr className='solid'/>
      <AddNewTodoItem/> 
      <SearchTodo/>
      <TodoList/>
    </div>
  );
}

export default App;
