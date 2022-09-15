function createStore(initialState) {
  let currentState = initialState;

  return {
    getState: () => currentState,
    setState: (newState) => (currentState = newState),
  };
}

const store = createStore({
  value1: 0,
  value2: 0,
});

export default store;
