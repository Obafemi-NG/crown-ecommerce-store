import React from 'react';
import HomePage from './pages/homepage/homepage.components';
import Shop from './pages/shop/shop.components'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Route, Routes } from 'react-router-dom';
import {auth} from './firebase/firebase.utils'
import { onAuthStateChanged } from 'firebase/auth';
import { createUserProfileDocument,  } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { Navigate } from 'react-router-dom';

import './App.css';
import { onSnapshot } from 'firebase/firestore';
import Checkout from './pages/checkout/checkout.component';
import CollectionPage from './pages/collection/collection.component';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {
  
  unsubscribe = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribe = onAuthStateChanged( auth, async userAuth => {
      if (userAuth) {
        const docRef = await createUserProfileDocument(userAuth); 
        onSnapshot(docRef, (snapshot) => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
          
          // this.setState({currentUser : snapshot.docs.map((doc) => doc.data())}, () => {
          //   console.log(this.state)
          // })
        });
        
      }
      
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount () {
    this.unsubscribe();
  }
  
  
  render() {
    return (
      <React.Fragment>
        <Header />
        <Routes>
          <Route path = '/' element =     {<HomePage/>} />
          <Route path = 'shop' element = {<Shop/>} />
          <Route path = 'shop/:collectionId' element = {<CollectionPage/>}/>
          
            
          {/* <Route path = '/sign-in' element = {this.props.currentUser ? <Navigate replace to ='/' /> : <SignInAndSignUp/>} /> */}
          <Route path = 'checkout' element ={<Checkout />} />
          <Route path = '*' element = {this.props.currentUser ? <Navigate replace to ='/' /> : <SignInAndSignUp/>} />
      </Routes>
      </React.Fragment>
      
      
    );
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
