import PRODUCT_DATA from "./knife.data";
import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: PRODUCT_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
