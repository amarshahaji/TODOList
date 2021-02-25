import stringConstant from '../../constants/index';

// Action for search the todo item
export function searchWord(word) {
  return { type: stringConstant.SEARCH_WORD, payload: word };
}
