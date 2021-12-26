import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
// import {signOut} from 'firebase/auth';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { signOut } from 'firebase/auth';

const Header = ({currentUser}) => {
    return(
        <React.Fragment>
            <div className = 'header'>
                <Link className = 'logo-container' to = '/'>
                <Logo className = 'logo' />
                </Link>
            <div className = 'options'>
                <Link className = 'ozption' to = '/shop'>
                SHOP
                </Link>
                <Link className = 'option' to = 'contact'>
                CONTACT US
                </Link>
                {currentUser ? <div className = 'option' onClick = { () => signOut(auth)}> SIGN OUT</div> : <Link className = 'option' to = '/sign-in'>SIGN IN</Link>}
                
            </div>
        </div>
        <Outlet/>
        </React.Fragment>

    )
}

export default Header;