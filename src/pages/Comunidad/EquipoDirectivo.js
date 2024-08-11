import React, { useState } from "react";
import { motion } from "framer-motion";
import Directivas from "./Data/Directivas.js";
import '../../styles/Comunidad/EquipoDirectivo.css'

function EquipoDirectivo (){

  const [imagens, setImagens] = useState(null)

  return(
    <>
      <section className='contenedor-pagina-comunidad' id="EquipoDirectivo">
        
        <div className='contenedor-titulo-comunidad'>
          <p>NUESTRO EQUIPO DIRECTIVO</p>
        </div>
        
        <motion.div className='contenedor-cardslider-comunidad'>
            <motion.div className='cardslider' drag='x' dragConstraints={{right: 0, left: -500}}>
                {Directivas.map((imagens, index) => (
                  <motion.div className='contenedor-imagen-card' key={index} onDoubleClick={() => setImagens(imagens)}>
                    {
                      <motion.div className='contenedor-cargo-card'>
                          <p>{imagens.cargo}</p>
                      </motion.div>
                    }

                    {
                      <img src={imagens.imagen[0].imgs} alt='Foto' />
                    } 

                    {
                      <motion.div className='contenedor-texto-comunidad'>
                          <p>{imagens.nombre}</p>
                          <p>{imagens.carrera}</p>
                      </motion.div>
                    }
                  </motion.div>
                ))}
            </motion.div>  
        </motion.div>

        <motion.div className='popup-media' style={{ display: imagens ? 'block' : 'none' }}>
            <motion.div >
                <span onClick={() => setImagens(null)}>&times;</span>
                    {                               
                        <img src={imagens?.imagen[0].imgs} alt='Foto Superpuesta' />
                    }   
            </motion.div>
        </motion.div>
        
      </section>
    </>
  )
}

export default EquipoDirectivo;