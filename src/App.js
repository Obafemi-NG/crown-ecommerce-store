import React from 'react';
import HomePage from './pages/homepage/homepage.components';
import Shop from './pages/shop/shop.components'
import Header from './components/header/header.component'
import { Route, Routes } from 'react-router-dom';



import './App.css';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route element = {<Header/>}>
          <Route path = '/' element =     {<HomePage/>} />
          <Route path = '/shop' element = {<Shop/>} />
        </Route>
      </Routes>
      
    );
  }
  
}

export default App;
