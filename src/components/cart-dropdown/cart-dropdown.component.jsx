import React from 'react';
import {createStructuredSelector} from 'reselect';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from '../cart-items/cart-items.component';
import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { useNavigate } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartDropdown = ({cartItems, dispatch}) => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/checkout');
        dispatch(toggleCartHidden());
    }
    return (
        <div className = 'cart-dropdown'>
            <div className = 'cart-items'>
                {
                    cartItems.length ? 
                    (cartItems.map(cartItem => <CartItem key = {cartItem.id} item = {cartItem} />)) : (<span className = 'empty-message'> There is no Item in your Cart!</span>)
                }
            </div>
            <CustomButton onClick = {handleClick}>PROCEED TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);
