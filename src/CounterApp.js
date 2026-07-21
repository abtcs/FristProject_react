import { useReducer } from 'react';

const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    case 'SET_VALUE':
      return { count: action.payload };
    default:
      return state;
  }
}

export default function CounterApp() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div style={{ padding: '20px', maxWidth: '480px' }}>
      <h2>Counter App</h2>
      <p style={{ fontSize: '24px', margin: '16px 0' }}>Count: {state.count}</p>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        <button onClick={() => dispatch({ type: 'SET_VALUE', payload: 100 })}>Set to 100</button>
      </div>
    </div>
  );
}
