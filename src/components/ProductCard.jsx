import './product-card.css';

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useShop from '../context/ShopContext';

const ProductCard = ({ name, imageUrl, price }) => {
  const { products, addToCart, removeFromCart } = useShop();
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const foundItem = products.find((product) => product.name === name);

    if (foundItem) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [products, name]);

  const handleClick = () => {
    const product = { name, imageUrl, price };
    inCart ? removeFromCart(product) : addToCart(product);
  };

  return (
    <div className='product-card'>
      <h4>{name}</h4>
      <img src={imageUrl} alt={name} />
      <p>${price}</p>
      <button onClick={handleClick}>{inCart ? '-' : '+'}</button>
    </div>
  );
};

export default ProductCard;
