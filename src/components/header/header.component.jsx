import React from 'react';
import { HeaderContainer, OptionLink, OptionDiv, OptionsContainer, LogoContainer } from './header.styles';
import { connect } from 'react-redux';
// import {Link} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { signOut } from 'firebase/auth';
import CartIcon from '../cart-icon/cart-icon.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => {
    return(
        <React.Fragment>
            <HeaderContainer>
                <LogoContainer to = '/'>
                <Logo className = 'logo' />
                </LogoContainer>
            <OptionsContainer className = 'options'>
                <OptionLink className = 'option' to = '/shop'>
                SHOP
                </OptionLink>
                <OptionLink className = 'option' to = 'contact'>
                CONTACT US
                </OptionLink>
                {currentUser ? <OptionDiv className = 'option' onClick = { () => signOut(auth)}> SIGN OUT</OptionDiv> : <OptionLink className = 'option' to = '/sign-in'>SIGN IN</OptionLink>}
                <CartIcon/>
            </OptionsContainer>
            {hidden ? null : <CartDropdown/> }
            
        </HeaderContainer>
        <Outlet/>
        </React.Fragment>

    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden : selectCartHidden
})

export default connect(mapStateToProps)(Header);