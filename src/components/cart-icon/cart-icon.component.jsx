import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { selectTotalCartItemsCount } from "../../redux/cart/cart.selector";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingBag className="shopping-bag" />
      <span className="cart-count"> {itemCount} </span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectTotalCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
