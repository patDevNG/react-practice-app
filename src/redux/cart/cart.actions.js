import {CartActionTypes} from './cart.types';

export const toggledCartHidden = ()=>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
})
export const addItem = item =>({
    type:CartActionTypes.ADD_CART_ITEM,
    payload:item
})

export const clearItemFromCart = item =>({
    type:CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
})

export const removeCartItem = item =>({
    type:CartActionTypes.REMOVE_CART_ITEM,
    payload:item
})

export const emptyCartAfterPayment = ()=>({
    type:CartActionTypes.EMPTY_CART_AFTER_PAYMENT,
    
})

