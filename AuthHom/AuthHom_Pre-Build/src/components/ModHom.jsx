import { useState } from "react";
import "../Hom.css";
import CrudFormHom from "./crud/CrudFormHom";
import CrudTableHom from "./crud/CrudTableHom";

const baseDatos = [
  {codigo:204, materia:"Calculo integral", programa:"ingenieria mecanica", periodo:20221, calificacion:4.2, comentario:"none"},
  {codigo:546, materia:"Vivamos la universidad", programa:"ingenieria industrial", periodo:20221, calificacion:5, comentario:"none"},
  {codigo:485, materia:"Descubriendo la fisica", programa:"ingenieria civil", periodo:20221, calificacion:4.1, comentario:"none"},
  {codigo:232, materia:"Tecnicas de programacion", programa:"ingenieria de sistemas", periodo:20221, calificacion:3.9, comentario:"none"}
]

function SolicitudHom({onUpdateState}) {
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState("");
  const [facultad, setFacultad] = useState("");
  const [programa, setPrograma] = useState("");

  const [solicitudes, setSolicitudes] = useState(baseDatos)

  const addSolicitud = (solicitud) => {
    setSolicitudes([
      ...solicitudes,
      solicitud
    ])
  }

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
                    required
                    placeholder="Nombre"
                    type="text"
                    value={nombre}
                    onChange={handleNombreChange}
                  />
                </td>
                <td>CÉDULA:</td>
                <td>
                  <input
                    required
                    placeholder="Cédula"
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
                    required
                    placeholder="Facultad"
                    type="text"
                    value={facultad}
                    onChange={handleFacultadChange}
                  />
                </td>
                <td>PROGRAMA:</td>
                <td>
                  <input
                    required
                    placeholder="Programa"
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
      <CrudFormHom addSolicitud = {addSolicitud}/>
      <CrudTableHom solicitudes = {solicitudes}/>
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
