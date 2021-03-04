import React from 'react';
import {ReactComponent  as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggledCartHidden} from '../../redux/cart/cart.actions'
import './cart-icon.styles.scss';

const CartIcon =({toggledCartHidden})=>{
    return(
        <div className='cart-icon' onClick ={toggledCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>

        </div>
    )
}
const mapDispatchToProps = dispatch =>({
    toggledCartHidden:()=>dispatch(toggledCartHidden())
})
export default connect(null,mapDispatchToProps)(CartIcon)