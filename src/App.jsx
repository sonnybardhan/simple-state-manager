import store from './store';

function IncrementValue({ item }) {
  return (
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
}

function DisplayValue({ item }) {
  const value = store.getState();
  return <div>{value[item]}</div>;
}

function App() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        maxWidth: 600,
        gap: '1rem',
      }}
    >
      <IncrementValue item='value1' />
      <DisplayValue item='value1' />
      <IncrementValue item='value2' />
      <DisplayValue item='value2' />
    </div>
  );
}

export default App;
