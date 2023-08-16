import React from 'react';
import './Card.css';

function Card({ pacientes }) {
  return (
    <div className="my-card">
      <h2 className="my-card-title" >Información de los pacientes:</h2>
      <ul className="my-card-list">
        {pacientes.map((paciente, index) => (
          <li className="my-card-item" key={index}>
            <p>Nombre: {paciente.nombre}</p>
            <p>Apellido: {paciente.apellido}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
