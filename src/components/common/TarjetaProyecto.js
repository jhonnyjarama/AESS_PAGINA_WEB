import React, { useState } from "react";
import { Link } from "react-router-dom";
import Proyectos from "../../pages/Proyectos/Data/Proyectos";
import '../../styles/Proyectos/TarjetaProyecto.css';

function TarjetaProyecto() {
  const proyectosPorPagina = 3;
  const [paginaActual, setPaginaActual] = useState(1);

  const indexUltimoProyecto = paginaActual * proyectosPorPagina;
  const indexPrimerProyecto = indexUltimoProyecto - proyectosPorPagina;
  const proyectosActuales = Proyectos.slice(indexPrimerProyecto, indexUltimoProyecto);

  const handleClickPagina = (pageNumber) => {
    setPaginaActual(pageNumber);
  };

  return (
    <main className="contenedor-general-proyectos">
      {proyectosActuales.map((proyect) => (
        <section key={proyect.id} className="contenedor-proyecto">
          <img
            className="imagen-proyecto"
            src={proyect.imagen}
            alt="Foto de Proyecto"
          />
          <div className="contenedor-texto-proyecto">
            <h2 className="nombre-proyecto">{proyect.titulo}</h2>
            <div className="categoria-proyecto">{proyect.categoria}</div>
            <div className="contenedor-separador">
              <div className="amarillo"></div>
              <div className="marron"></div>
            </div>
            <div className="descripcion-proyecto">
              <p>{proyect.proyectext}</p>
            </div>
            <div classname="boton-vermas">
              <Link to={`/ProyectosIndividuales/${proyect.id}`}>
                <button id="vermas">Ver más</button>
              </Link>
            </div>
          </div>
        </section>
      ))}
      <div className="controles-paginacion">
        {Array.from({ length: Math.ceil(Proyectos.length / proyectosPorPagina) }, (_, index) => (
          <button key={index} onClick={() => handleClickPagina(index + 1)}>{index + 1}</button>
        ))}
      </div>
    </main>
  );
}

export default TarjetaProyecto;