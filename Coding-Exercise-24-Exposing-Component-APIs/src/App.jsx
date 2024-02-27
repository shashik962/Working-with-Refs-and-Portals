import React from 'react';
 
import Form from './Form';
 
export function App() {
  const form = React.useRef();
 
  function handleRestart() {
    form.current.clear();
  }
 
  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      <Form ref={form} />
    </div>
  );
}

export default App;