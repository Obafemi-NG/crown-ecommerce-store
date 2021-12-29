import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from '../cart-items/cart-items.component';
import './cart-dropdown.styles.scss';


const CartDropdown = ({cartItems}) => {
    return (
        <div className = 'cart-dropdown'>
            <div className = 'cart-items'>
                {
                    cartItems.map(cartItem => <CartItem key = {cartItem.id} item = {cartItem} />)
                }
            </div>
            <CustomButton>PROCEED TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = ({cart : {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);