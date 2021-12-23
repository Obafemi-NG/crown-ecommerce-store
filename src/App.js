import React from 'react';
import HomePage from './pages/homepage/homepage.components';
import Shop from './pages/shop/shop.components'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Route, Routes } from 'react-router-dom';




import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentUser : null
    }
    
  }
  
  
  render() {
    return (
      <Routes>
        <Route element = {<Header/>}>
          <Route path = '/' element =     {<HomePage/>} />
          <Route path = '/shop' element = {<Shop/>} />
          <Route path = '/sign-in' element = {<SignInAndSignUp/>} />

        </Route>
      </Routes>
      
    );
  }
  
}

export default App;
