import { useEffect } from 'react';
import { useState } from 'react';
import store from './store-2';

const useStore = (selector = (state) => state) => {
  const [state, setState] = useState(selector(store.getState()));

  useEffect(() => {
    store.subscribe((state) => setState(selector(state)));
  }, []);

  return state;
};

// const DisplayCount = ({ item }) => <span>{useStore()[item]}</span>;
const DisplayCount = ({ item }) => (
  <span>{useStore((state) => state[item])}</span>
);

const IncrementButton = ({ item }) => (
  <button
    onClick={() => {
      const state = store.getState();
      store.setState({
        ...state,
        [item]: state[item] + 1,
      });
    }}
  >
    {item}
  </button>
);

function App() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `1fr 1fr`,
        maxWidth: 600,
        gap: '1rem',
      }}
    >
      <IncrementButton item='v1' />
      <DisplayCount item='v1' />
      <IncrementButton item='v2' />
      <DisplayCount item='v2' />
    </div>
  );
}

export default App;
