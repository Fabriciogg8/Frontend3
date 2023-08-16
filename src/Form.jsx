import React, { useState } from "react";
import './Form.css';

function Form({ onAddPatient }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Estado para el mensaje de error

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (nombre.trim().length < 3 || nombre.trim().startsWith(" ") || apellido.trim().length < 6) {
      setErrorMessage("Por favor chequea que la información sea correcta");
    } else {
      onAddPatient({ nombre, apellido });
      setNombre("");
      setApellido("");
      setErrorMessage(""); // Limpiar el mensaje de error
    }
  };

  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <input
        className="my-input"
        type="text"
        placeholder="Ingrese su nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        className="my-input"
        type="text"
        placeholder="Ingrese su Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />
      <button className="my-button" type="submit">Agregar paciente</button>
      <p className="my-error" >{errorMessage}</p>
    </form>
  );
}

export default Form;