
import { createApi } from 'unsplash-js';

const unsplash = createApi({ accessKey: 'MW7irTaFovSmSklKBp_nn7xNQHIRXVc83T1aOjbgwR0' });

export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";

export function handleSearch(query) {
  return function (dispatch) {
    unsplash.search.getPhotos({
      query: query
    }).then(result=>{console.log(result)})

  };
}

// fetch(url)
//   .then((response) => response.json())
//   .then((movie) => {
//     console.log("movie", movie);
//     dispatch(addMovieSearchResult(movie));
//   });

export function addSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}
