// actions.js
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';

export const addToFavourite = (item) => ({
  type: ADD_TO_FAVOURITE,
  payload: item,
});

export const removeFromFavourite = (itemId) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: itemId,
});
