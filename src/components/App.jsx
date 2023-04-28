import React from 'react';
import { Navbar } from './Navbar/Navbar.jsx';
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer.jsx';
import { Checkout } from './Checkout/Checkout.jsx';
import './App.css';

//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Context
import { DarkModeProvider } from '../context/DarkModeContext.js';
import { Cart } from './Cart/Cart.jsx';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter >
        <DarkModeProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/category/:category' element={<ItemListContainer/>} />
            <Route path='/product/:id' element={<ItemDetailContainer/>} />
            <Route path='/checkout/' element={<Checkout/>} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
        </DarkModeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

