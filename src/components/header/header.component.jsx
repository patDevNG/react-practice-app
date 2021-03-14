import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {HeaderContainer,LogoContainer, OptionsContainer,OptionLink, OptionDiv} from './header.styles'

import {auth} from '../../firebase/firebase.utils'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden, selectCartItems} from '../../redux/cart/cart.selector';
import {selectCurrentUser } from '../../redux/user/user.selector'
const Header=({currentUser,hidden})=>(
    <HeaderContainer>
        <LogoContainer to='/' >
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop' >SHOP</OptionLink>
            <OptionLink to='/shop'>CONTACT</OptionLink>
            {
                currentUser?
                <OptionDiv  onClick={()=> auth.signOut()}>SIGN OUT</OptionDiv>:
                <Link to='/signin' >SIGN IN</Link>
            }
            
            <CartIcon/>
        </OptionsContainer>
        {
            hidden? null:
        <CartDropDown/>
        }
    </HeaderContainer>

    
)
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

export default connect(mapStateToProps )(Header)