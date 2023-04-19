import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Navbar } from './Navbar/Navbar.jsx';
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer.jsx';
import './App.css';
import { Checkout } from './Checkout/Checkout.jsx';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter >
        <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/category/:category' element={<ItemListContainer/>} />
            <Route path='/product/:id' element={<ItemDetailContainer/>} />
            <Route path='/checkout/' element={<Checkout/>} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

