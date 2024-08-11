import React, { useState } from "react";
import { motion } from "framer-motion";
import '../../styles/Comunidad/CasasEstudio.css'
import Universidades from "./Data/Universidades.js";

function EquipoDirectivo (){

  const [imagens, setImagens] = useState(null)

  return(
    <>
      <section className='contenedor-pagina-universidad'>
        
        <div className='contenedor-titulo-universidad'>
          <p>CASAS DE ESTUDIO</p>
        </div>
        
        <motion.div className='contenedor-cardslider-universidad'>
            <motion.div className='cardslider-universidad' drag='x' dragConstraints={{right: 0, left: -3000}}>
                {Universidades.map((imagens, index) => (
                  <motion.div className='contenedor-imagen-card-universidad' key={index} onDoubleClick={() => setImagens(imagens)}>

                    {
                      <img src={imagens.imagenuni} alt='Foto' />
                    } 

                  </motion.div>
                ))}
            </motion.div>  
        </motion.div>

        <motion.div className='popup-media' style={{ display: imagens ? 'block' : 'none' }}>
            <motion.div >
                <span onClick={() => setImagens(null)}>&times;</span>
                    {                               
                        <img src={imagens?.imagenuni} alt='Foto Superpuesta' />
                    }   
            </motion.div>
        </motion.div>
        
      </section>
    </>
  )
}

export default EquipoDirectivo;