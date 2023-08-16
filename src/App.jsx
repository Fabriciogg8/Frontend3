import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Card from './Card'; 

function App() {
  const [pacientes, setPacientes] = useState([]);

  const addPatient = (patient) => {
    setPacientes([...pacientes, patient]);
  };

  return (
    <div className="App">
      <h1>Registro de pacientes</h1>
      <Form onAddPatient={addPatient} />
      <Card pacientes={pacientes}></Card>
    </div>
  );
}

export default App;
