import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav style={{ display: 'flex', gap: '1em' }}>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart</Link>
      </nav>
      <h1>My Shop</h1>
      <Outlet />
    </>
  );
};

export default Layout;
