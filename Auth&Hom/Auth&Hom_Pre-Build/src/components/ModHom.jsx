import React, { useState } from "react";

function Solicitud() {
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState("");
  const [facultad, setFacultad] = useState("");
  const [programa, setPrograma] = useState("");

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleCedulaChange = (event) => {
    setCedula(event.target.value);
  };

  const handleFacultadChange = (event) => {
    setFacultad(event.target.value);
  };

  const handleProgramaChange = (event) => {
    setPrograma(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // code to submit the form goes here
  };

  return (
    <div>
      <div className="solicitud-title">
        <h1>SOLICITUD DE RECONOCIMIENTO Y HOMOLOGACIÓN DE MATERIAS</h1>
      </div>
      <div className="solicitud-form">
        <form onSubmit={handleSubmit}>
          <label>
            NOMBRE:
            <input type="text" value={nombre} onChange={handleNombreChange} />
          </label>
          <label>
            CÉDULA:
            <input type="text" value={cedula} onChange={handleCedulaChange} />
          </label>
          <label>
            FACULTAD:
            <input type="text" value={facultad} onChange={handleFacultadChange} />
          </label>
          <label>
            PROGRAMA:
            <input type="text" value={programa} onChange={handleProgramaChange} />
          </label>
          <div className="solicitud-fecha">
            <span>Fecha:</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
        </form>
      </div>
      <div className="solicitud-tabla">
        <table>
          <thead>
            <tr>
              <th>CÓDIGO</th>
              <th>NOMBRE MATERIA</th>
              <th>NOMBRE PROGRAMA</th>
              <th>PERIODO</th>
              <th>CALIFICACIÓN</th>
              <th>COMENTARIO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="solicitud-buttons">
        <button type="submit">ENVIAR SOLICITUD</button>
        <button>LIMPIAR FORMULARIO</button>
        <button>VER SOLICITUDES</button>
        <button>REGRESAR</button>
      </div>
    </div>
  );
}

export default Solicitud;