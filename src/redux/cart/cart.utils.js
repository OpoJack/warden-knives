//Utility functions for cart reducer

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  //If the itemid is already in the cart, increase the quantity of that item
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
      ? {...cartItem, quantity: cartItem.quantity + 1}
      : cartItem
    )
  }

  //Increment the quantity of the item if it is not in the cart
  return [...cartItems, {...cartItemToAdd, quantity: 1}];
};