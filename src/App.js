import React from 'react';
import HomePage from './pages/homepage/homepage.components';
import Shop from './pages/shop/shop.components'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Route, Routes } from 'react-router-dom';
import {auth} from './firebase/firebase.utils'
import { onAuthStateChanged } from 'firebase/auth';
import { createUserProfileDocument } from './firebase/firebase.utils';



import './App.css';
import { onSnapshot } from 'firebase/firestore';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentUser : null
    }
    
  }

  unsubscribe = null;

  componentDidMount() {
    this.unsubscribe = onAuthStateChanged( auth, async userAuth => {
      if (userAuth) {
        const docRef = await createUserProfileDocument(userAuth); 
        onSnapshot(docRef, (snapshot) => {
          this.setState({
            currentUser : {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => {
            console.log(this.state)
          })
          // this.setState({currentUser : snapshot.docs.map((doc) => doc.data())}, () => {
          //   console.log(this.state)
          // })
        });
        
      }
      
      this.setState({currentUser : userAuth})
      
    })
  }

  componentWillUnmount () {
    this.unsubscribe();
  }
  
  
  render() {
    return (
      <React.Fragment>
        <Header currentUser = {this.state.currentUser} />
        <Routes>
          <Route path = '/' element =     {<HomePage/>} />
          <Route path = '/shop' element = {<Shop/>} />
          <Route path = '/sign-in' element = {<SignInAndSignUp/>} />
      </Routes>
      </React.Fragment>
      
      
    );
  }
  
}

export default App;
