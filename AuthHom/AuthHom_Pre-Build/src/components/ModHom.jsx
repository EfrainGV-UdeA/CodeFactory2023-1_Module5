import { useState } from "react";
import "../Hom.css";

function SolicitudHom({onUpdateState}) {
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
    <div className="solicitud-container">
      <div className="solicitud-title">
        <h1>SOLICITUD DE RECONOCIMIENTO Y HOMOLOGACIÓN DE MATERIAS</h1>
      </div>
      <div className="solicitud-form">
        <h2>DATOS DEL ESTUDIANTE</h2>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>NOMBRE:</td>
                <td>
                  <input
                    type="text"
                    value={nombre}
                    onChange={handleNombreChange}
                  />
                </td>
                <td>CÉDULA:</td>
                <td>
                  <input
                    type="number"
                    value={cedula}
                    onChange={handleCedulaChange}
                  />
                </td>
              </tr>
              <tr>
                <td>FACULTAD:</td>
                <td>
                  <input
                    type="text"
                    value={facultad}
                    onChange={handleFacultadChange}
                  />
                </td>
                <td>PROGRAMA:</td>
                <td>
                  <input
                    type="text"
                    value={programa}
                    onChange={handleProgramaChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
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
                <input type="number" />
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
                <input type="number" />
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
        <button onClick={() => onUpdateState(false)}>REGRESAR</button>
      </div>
    </div>
  );
}

export default SolicitudHom;
