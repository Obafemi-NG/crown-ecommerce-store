import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden}) => {
    return(
        <div className = 'cart-icon' onClick = {toggleCartHidden}>
            <ShoppingBag className = 'shopping-bag' />
            <span className = 'cart-count'> 0</span>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})
export default connect(null, mapDispatchToProps)(CartIcon);