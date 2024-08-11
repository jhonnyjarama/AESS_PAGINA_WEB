import React, { useState } from "react"
import { Link } from "react-router-dom";
import AreasAESSUNI from "../../pages/Comunidad/Data/AreasAESSUNI.js";
import '../../styles/Comunidad/PaginaComunidad.css'

function TarjetaEquipo() {
  const [Areas, setAreasAESSUNI] = useState(AreasAESSUNI);

  return (
    <div id="Areas">
      <main className='contenedor-general-proyectosc'>
        {/*MOSTRANDO TARJETAS areas*/}
        {AreasAESSUNI.map(proyect => (
          <section key={proyect.id} className='contenedor-proyectosc'>
            {proyect.id % 2 === 0 ? (
              <>
                <figure>
                  <div className='contenedor-imagenc'>
                    {/*MOSTRANDO IMAGEN DEL area*/}
                    <img 
                      src={proyect.imagen} 
                      alt='Foto de noticia'
                    />
                  </div>
                </figure>
                <div className="contenedor-textosc">
                  {/*MOSTRANDO TITULO DEL PROYECTO*/}
                  {/*PASANDO PARAMETRO PARA LA PAGINA PROYECTOS INDIVIDUALES*/}
                  <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{proyect.titulo}</span>
                  {/*MOSTRANDO TEXTO DEL PROYECTO*/}
                  <div className='texto-proyectoc'>
                    <p>{proyect.proyectext}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="contenedor-textosc">
                  {/*MOSTRANDO TITULO DEL PROYECTO*/}
                  {/*PASANDO PARAMETRO PARA LA PAGINA PROYECTOS INDIVIDUALES*/}
                  <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{proyect.titulo}</span>
                  {/*MOSTRANDO TEXTO DEL PROYECTO*/}
                  <div className='texto-proyectoc'>
                    <p>{proyect.proyectext}</p>
                  </div>
                </div>
                <figure>
                  <div className='contenedor-imagenc'>
                    {/*MOSTRANDO IMAGEN DEL area*/}
                    <img 
                      src={proyect.imagen} 
                      alt='Foto de noticia'
                    />
                  </div>
                </figure>
              </>
            )}
          </section>
        ))} 
      </main>
    </div>
  );
}


export default TarjetaEquipo;