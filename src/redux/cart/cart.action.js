import { cartActionTypes } from "./cart.type";

export const toggleCartHidden = () => ({
    type : cartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type : cartActionTypes.CART_ITEM,
    payload : item
})