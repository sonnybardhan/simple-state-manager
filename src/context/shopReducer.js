export const initialState = {
  total: 0,
  products: [],
};

const shopReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TO_CART':
      return { ...state, products: payload };
    case 'REMOVE_FROM_CART':
      return { ...state, products: payload };
    case 'UPDATE_TOTAL':
      return { ...state, total: payload };
    default:
      return state;
  }
};

export default shopReducer;
