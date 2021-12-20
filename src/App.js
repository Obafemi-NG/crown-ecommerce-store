import React from 'react';
import HomePage from './pages/homepage/homepage.components';
import { Route, Routes } from 'react-router-dom';



import './App.css';

const Hats = () => {
  return (
    <h1>Your Hats here!!!</h1>
  )
}

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path = '/' element = {<HomePage/>} />
        <Route path = '/hats' element = {<Hats/>} />
      </Routes>
      
    );
  }
  
}

export default App;
