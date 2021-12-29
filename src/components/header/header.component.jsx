import React from 'react';
import './header.styles.scss';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { signOut } from 'firebase/auth';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => {
    return(
        <React.Fragment>
            <div className = 'header'>
                <Link className = 'logo-container' to = '/'>
                <Logo className = 'logo' />
                </Link>
            <div className = 'options'>
                <Link className = 'option' to = '/shop'>
                SHOP
                </Link>
                <Link className = 'option' to = 'contact'>
                CONTACT US
                </Link>
                {currentUser ? <div className = 'option' onClick = { () => signOut(auth)}> SIGN OUT</div> : <Link className = 'option' to = '/sign-in'>SIGN IN</Link>}
                <CartIcon/>
            </div>
            {hidden ? null : <CartDropdown/> }
            
        </div>
        <Outlet/>
        </React.Fragment>

    )
}

const mapStateToProps = ({user : {currentUser}, cart : {hidden}})=> ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);