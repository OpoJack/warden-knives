import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart} from './cart.utils';

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
      };
    case CartActionTypes.REMOVE_ITEM:
      return{
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_FROM_CART:
      return{
        ...state,
        //filter() returns back anything that yields true
        //If cartItems.id !== item we're trying to filter out, then we return it
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      }
    default:
      return state;
  }
}

export default cartReducer;