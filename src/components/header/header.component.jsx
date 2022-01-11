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
                    <Logo />
                </LogoContainer>
                <OptionsContainer>
                    <OptionLink to = '/shop'>
                        SHOP
                    </OptionLink>
                    {/* <OptionLink to = 'contact'>
                        CONTACT US
                    </OptionLink> */}
                    {currentUser ? <OptionDiv onClick = { () => signOut(auth)}> SIGN OUT</OptionDiv> : <OptionLink to = '/sign-in'>SIGN IN</OptionLink>}
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