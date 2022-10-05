import React, { useState } from 'react';
import './App.css';

type Color = 'red' | 'blue';
type State = {
  color: Color;
  count: number;
};

function App() {
  const [state, setState] = useState<State>({ count: 0, color: 'red' });

  return (
    <div className='App'>
      <ButtonWrapper />
      <Display count={state.count} color={state.color} />
    </div>
  );
}

export default App;

const ButtonWrapper = () => {
  return (
    <>
      <button>Increment</button>
      <button>Swap Color</button>
    </>
  );
};

const Display = ({ count, color }: { count: number; color: string }) => {
  return (
    <>
      <div>Current Count: {count}</div>
      <div>Current Color: {color}</div>
    </>
  );
};
