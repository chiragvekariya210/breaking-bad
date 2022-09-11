import {ADD_FAVOURITES} from '../Action/favourities';

const initialState = {
  FavouritesItem: [],
};

export const FavReducer = (state = initialState, action) => {
  if (action.type === ADD_FAVOURITES) {
    return {...state, FavouritesItem: action.payload};
  } else {
    return state;
  }
};
