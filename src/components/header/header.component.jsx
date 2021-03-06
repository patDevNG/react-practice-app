import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import './header.styles.scss'

import {auth} from '../../firebase/firebase.utils'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden, selectCartItems} from '../../redux/cart/cart.selector';
import {selectCurrentUser } from '../../redux/user/user.selector'
const Header=({currentUser,hidden})=>(
    <div className="header">
        <Link className='logo-container'to='/' >
            <Logo className ='logo'  />
        </Link>
        <div className="options">
            <Link to='/shop' className="option">SHOP</Link>
            <Link to='/shop' className="option">CONTACT</Link>
            {
                currentUser?
                <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>:
                <Link to='/signin' className='option'>SIGN IN</Link>
            }
            
            <CartIcon/>
        </div>
        {
            hidden? null:
        <CartDropDown/>
        }
    </div>

    
)
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

export default connect(mapStateToProps )(Header)