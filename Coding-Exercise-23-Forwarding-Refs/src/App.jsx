import Input from './Input';

export const userData = {
  name: '',
  email: '',
};

function App() {
  function handleSaveData() {
    userData.name = 'TODO: Set to actual entered value';
    userData.email = 'TODO: Set to actual entered value';

    console.log(userData);
  }

  return (
    <div id="app">
      <Input type="text" label="Your Name" />
      <Input type="email" label="Your E-Mail" />
      <p id="actions">
        <button onClick={handleSaveData}>Save Data</button>
      </p>
    </div>
  );
}
export default App;
