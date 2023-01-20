import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/routes';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div >
      <CartProvider>
        <RouterProvider router={router} />
        <Toaster />
      </CartProvider>
    </div>
  );
}

export default App;
