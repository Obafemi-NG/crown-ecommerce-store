import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe/stripe.component';

import { selectCartTotal, selectCartItems } from '../../redux/cart/cart.selector';

import './checkout.styles.scss';

const Checkout = ({cartItems, total}) => {
    return(
        <div className = 'checkout-page'>
            <div className = 'checkout-header'>
                <div className = 'header-block'>
                    <span>PRODUCT</span>
                </div>
                <div className = 'header-block'> 
                    <span>DESCRIPTION</span>
                </div>
                <div className = 'header-block'>
                    <span>QUANTITY</span>
                </div>
                <div className = 'header-block'>
                    <span>PRICE</span>
                </div>
                <div className = 'header-block'>
                    <span>REMOVE</span>
                </div>
            </div>
            
                { 
                    cartItems.map(cartItem =>   <CheckoutItem key =   {cartItem.id} cartItem =  {cartItem}/>)
                }

            <div className = 'total'>
                <span>
                    TOTAL : ${total}
                </span>
            </div>
            <div className = 'card-info'>
                *Please use the following credit card details for payments <br/>
                4242 4242 4242 4242 - Exp : 01/25 - CVV : 123
            </div>
            <StripeCheckoutButton price = {total}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotal
})

export default connect(mapStateToProps)(Checkout);