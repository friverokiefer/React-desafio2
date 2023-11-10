
import React, { useState } from 'react';
import Registro from './components/Registro/Registro';
import './App.css';

function App() {
  const [alertMessage, setAlertMessage] = useState(null);

  return (
    <div className="App">
      <Registro setAlertMessage={setAlertMessage} alertMessage={alertMessage} />
    </div>
  );
}

export default App;
