import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  collections: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPPDATE_COLLECTIONS:
      return {
        ...state,
        collecions: action.payload
      }
    default:
      return state;
  }
};

export default shopReducer;