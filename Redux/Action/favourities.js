export const ADD_FAVOURITES = 'ADD_FAVOURITES';

export const addFavourites = data => {
  return {
    type: ADD_FAVOURITES,
    payload: data,
  };
};
