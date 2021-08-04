import { ADD_SEARCH_RESULT } from "../actions";

// search Store
const initialRootState = {
  search: {
    result: []
   }
}

// search reducer
export function search(state = initialRootState, action) {

  switch (action.type) {

    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.results
      };

    default:
      return state;
  }
}

// called each time dispatch is called
export default function rootReducer(state = initialRootState, action) {
  return {
    search: search(state.result, action)
  };
}
