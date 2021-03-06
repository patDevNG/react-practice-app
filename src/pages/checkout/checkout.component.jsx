import React from 'react';
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector'
import './checkout.styles.scss'
import CheckoutItems from '../../components/checkout-item/checkout-item.component';

const CheckoutPage=({cartItems,total})=>(
    <div className = 'checkout-page'>
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove </span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                <CheckoutItems key={cartItem.id} cartItem ={cartItem}/>)
        }
        <div className='total'>
            <span>Total: ${total}</span>
        </div>
    </div>
)
const mapStateToprops = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})
export default connect(mapStateToprops)(CheckoutPage)