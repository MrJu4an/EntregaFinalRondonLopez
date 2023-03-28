import React from 'react';
import { Navbar } from './Navbar/Navbar.jsx';
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido"}/>
    </div>
  );
}

export default App;

