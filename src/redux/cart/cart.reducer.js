import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    //TOGGLE_CART_HIDDEN is a toggle to make the cart visible or hidden
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { 
        ...state,
        hidden: !state.hidden
      };
      //ADD_ITEM adds the payload to the cartItems array
      case CartActionTypes.ADD_ITEM:
        return{
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload)
        }
    default:
      return state;
  }
}

export default cartReducer;