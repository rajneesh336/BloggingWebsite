// reducers.js
import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from './action';

const initialState = {
  favourites: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
