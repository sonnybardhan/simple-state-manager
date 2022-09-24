import { useReducer } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import shopReducer, { initialState } from './shopReducer';

export const ShopContext = createContext(initialState);

export const ShopContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    const newProducts = [...state.products, product];

    updateTotal(newProducts);

    dispatch({
      type: 'ADD_TO_CART',
      payload: newProducts,
    });
  };

  const removeFromCart = (product) => {
    const filteredProducts = state.products.filter(
      (currentProduct) => currentProduct.name !== product.name
    );

    updateTotal(filteredProducts);

    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: filteredProducts,
    });
  };

  const updateTotal = (products) => {
    const total = products.reduce(
      (currentTotal, product) => currentTotal + product.price,
      0
    );

    dispatch({
      type: 'UPDATE_TOTAL',
      payload: total,
    });
  };

  return (
    <ShopContext.Provider
      value={{
        addToCart,
        removeFromCart,
        updateTotal,
        products: state.products,
        total: state.total,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

const useShop = () => {
  const shop = useContext(ShopContext);

  if (shop == undefined)
    throw new Error('shop can only be used inside the ShopContextProvider');

  return shop;
};

export default useShop;
