import { useReducer } from 'react';
import CartContext from './CartContext';

const defaultCartState = {
    items: [],
    totalAmount: 0
}
//update cart items concat to new array
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
const updatedTotalAmount =
    state.totalAmount + action.item.price * action.item.amount;

const existingCartItemIndex = state.items.findIndex
    (item => item.id === action.item.id);
const existingCartItem = state.items[existingCartItemIndex];

let updatedItems;

if (existingCartItem) {
    const updatedItem = {
    ...existingCartItem,
    amount: existingCartItem.amount + action.item.amount
}
    updatedItems = [...state.items];
    updatedItem[existingCartItemIndex] = updatedItem;
} else {
    updatedItems = state.items.concat(action.item);
}
    return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
    }
}
if (action.type === 'CLEAR'){
    return defaultCartState;
}
return defaultCartState
}

//dispatch to reducer

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
//dispatch ADD action and forward item
const addItemToCartHandler = (item) => {
  dispatchCartAction({type: 'ADD', item: item});

}
//dispatch REMOVE action and forward id
const removeItemFromCartHandler = id => {
    dispatchCartAction({type: 'REMOVE', id: id})
}
//dispatch CLEAR cart
const clearCartHandler = () => {
    dispatchCartAction({type: 'CLEAR'});
}
//managing items with state
const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler
}
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;