import React from 'react';
import { Navbar } from './Navbar/Navbar.jsx';
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer.jsx';
import { Checkout } from './Checkout/Checkout.jsx';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
//React-Toastify
import { ToastContainer } from 'react-toastify';
//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Context
import { DarkModeProvider } from '../context/DarkModeContext.js';
import { Cart } from './Cart/Cart.jsx';
//import { createProducts, getProducts } from '../firebase/firebase.js';
const App = () => {
  //createProducts()
  //getProducts()
  return (
    <div className='App'>
      <BrowserRouter >
        <DarkModeProvider>
          <Navbar />
          <ToastContainer />
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/category/:category' element={<ItemListContainer/>} />
            <Route path='/product/:id' element={<ItemDetailContainer/>} />
            <Route path='/checkout/' element={<Checkout/>} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<center><h1 className='mt-5'>404 Not Found</h1></center>} />
          </Routes>
        </DarkModeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

