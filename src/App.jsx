import React from 'react';
import Products from './components/Products';
import { Link, Routes, Route } from 'react-router-dom';
import { shopData } from './data';
import Cart from './components/Cart';
import Layout from './components/Layout';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Products products={shopData} />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
