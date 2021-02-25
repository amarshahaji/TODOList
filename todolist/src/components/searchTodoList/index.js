import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { searchWord } from "./search.action";
/**
 * Component for search todo item in list
 */
export default function SearchTodo() {
  const dispatch = useDispatch();
  const [searchText, setSearchWord] = useState('')
  const handleSearchWord = (e) => {
    const value = e.target.value;
    setSearchWord(value);
    if (value?.length >= 3) {
      dispatch(searchWord(value));
    }
    if (value === "") {
      dispatch(searchWord(""));
    }
  };

  const clearSearchBar = () => {
    dispatch(searchWord(''))
    setSearchWord('');
  }
  return (
    <div className='item-center flex-direction-row'>
        <h3 className='mr-1'>Search TO-Do: </h3>
        <input className='input-box' value={searchText} placeholder='SEARCH TO-DO' onChange={(e)=>handleSearchWord(e)}></input>
        <button className='btn-primary ml-1' onClick={()=>clearSearchBar()}>RESET</button>
    </div>
  );
}
