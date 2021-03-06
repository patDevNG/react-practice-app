import React from 'react';
import {createStructuredSelector} from 'reselect'
import {ReactComponent  as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggledCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemCount} from '../../redux/cart/cart.selector'
import './cart-icon.styles.scss';

const CartIcon =({toggledCartHidden, itemCount})=>{
    return(
        <div className='cart-icon' onClick ={toggledCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>

        </div>
    )
}
const mapDispatchToProps = dispatch =>({
    toggledCartHidden:()=>dispatch(toggledCartHidden())
})
const mapStateToProp =createStructuredSelector({
    itemCount:selectCartItemCount
})
export default connect(mapStateToProp,mapDispatchToProps)(CartIcon)