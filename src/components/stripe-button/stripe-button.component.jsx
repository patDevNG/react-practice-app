import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

import {emptyCartAfterPayment} from '../../redux/cart/cart.actions'

import './stripe-button.styles.scss';

const StripeCheckoutButton=({price,emptyCartAfterSuccessfulPayment,history})=>{
    const priceForStripe = price *100
    const publishableKey = 'pk_test_51ITnsHBmRdbyEaEaQCP6vxrauGvg5aR1Rni4kgf5bGujeSKLHT8PKNDvuS0p3BsG2jeFcXt5xHqatFfiisCSH8uV00Dl9fOqYU'

    const onToken=token=>{
        console.log(token);
        alert('Payment was successful')
        emptyCartAfterSuccessfulPayment();
        history.push('/')
    }
    return (
        <StripeCheckout
        label='Pay Now'
        name='Pleroma Clothing LLC'
        billingAddress
        shippingAddress
        image =''
        panelLabel='Pay Now'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}
const mapDispatchToPro = dispatch=>({
    emptyCartAfterSuccessfulPayment: ()=>dispatch(emptyCartAfterPayment())
})
export default withRouter(connect(null,mapDispatchToPro)(StripeCheckoutButton))