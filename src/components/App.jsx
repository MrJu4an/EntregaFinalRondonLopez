import React from 'react';
import { Navbar } from './Navbar/Navbar.jsx';
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer.jsx';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;

