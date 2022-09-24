import React from 'react';
import useShop from '../context/ShopContext';
import ProductCard from './ProductCard';

const Cart = () => {
  const { total, products } = useShop();

  return (
    <>
      <div style={{ display: 'flex', gap: '1em' }}>
        {products.map((product) => (
          <ProductCard {...product} key={product.name} />
        ))}
      </div>
      <div className='cart-total'>${total.toFixed(2)}</div>
    </>
  );
};

export default Cart;
