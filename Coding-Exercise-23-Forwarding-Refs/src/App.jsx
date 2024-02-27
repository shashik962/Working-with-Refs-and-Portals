import React from 'react';
 
import Input from './Input';
 
export const userData = {
  name: '',
  email: '',
};
 
function App() {
  const name = React.useRef();
  const email = React.useRef();
 
  function handleSaveData() {
    const enteredName = name.current.value;
    const enteredEmail = email.current.value;
 
    userData.name = enteredName;
    userData.email = enteredEmail;
 
    console.log(userData);
  }
 
  return (
    <div id="app">
      <Input type="text" label="Your Name" ref={name} />
      <Input type="email" label="Your E-Mail" ref={email} />
      <p id="actions">
        <button onClick={handleSaveData}>Save Data</button>
      </p>
    </div>
  );
}
export default App;