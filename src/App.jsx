import { useState } from 'react';

import Page from './components/Page';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(value) {
    setState({
      ...state,
      count: count + value,
    });
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  );
}
