import React from 'react';
import ProductCard from './ProductCard';

const Products = ({ products }) => {
  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard {...product} key={product.name} />
      ))}
    </div>
  );
};

export default Products;
