import React, { useState } from "react";
import { motion } from "framer-motion";
import SubDirectivas from "./Data/SubDirectivas";
import '../../styles/Comunidad/EquipoSubDirectiva.css'

function EquipoSubDirectivo (){

  const [imagens, setImagens] = useState(null)
  const [imgens, setImgens] = useState(null)
  const [paramet, setParamet] = useState(0)

  return(
    <>
      <section className='contenedor-pagina-subdirectiva' id="EquipoSubdirectivo">
        
        <div className='contenedor-titulo-subdirectiva'>
            <p>CONOCE A NUESTRA SUBDIRECTIVA</p>
        </div>

        <div className="contenedor-botones_area">
            <button type="button" class="btn btn-dark" onClick={() => setParamet(0) }>ÁREA PROGRAMACIÓN WEB</button>
            <button type="button" class="btn btn-dark" onClick={() => setParamet(1) } >ÁREA DISEÑO Y PUBLICIDAD</button>
            <button type="button" class="btn btn-dark" onClick={() => setParamet(2) } >ÁREA PROYECTOS</button>
            <button type="button" class="btn btn-dark" onClick={() => setParamet(3) } >ÁREA ADMINISTRACION</button>
            <button type="button" class="btn btn-dark" onClick={() => setParamet(4) } >ÁREA STEM Y VISITAS</button>
        </div>

        <div className="contenedor-subdirectiva">

            <div className="contenedor-subdirector">

                <motion.div className='contenedor-cardslider-comunidad2'>
                    <motion.div className='cardslider' drag='x' dragConstraints={{right: 0, left: -450}}>
                        {SubDirectivas[paramet].subdirectores.map((imgens, index) => (
                          <motion.div className='contenedor-imagen-card' key={index} onDoubleClick={() => setImgens(imgens)}>
                            {
                              <motion.div className='contenedor-cargo-card'>
                                  <p>{imgens.cargo}</p>
                              </motion.div>
                            }
                            {
                              <img src={imgens.imgs} alt='Foto' />
                            } 

                          {
                              <motion.div className='contenedor-texto-comunidad'>
                                  <p>{imgens.nombre}</p>
                                  <p>{imgens.carrera}</p>
                              </motion.div>
                            }

                          </motion.div>
                        ))}
                    </motion.div>  
                </motion.div>

            </div>

            <div className="contenedor-colaboradores">

                <motion.div className='contenedor-cardslider-comunidad2'>
                    <motion.div className='cardslider' drag='x' dragConstraints={{right: 0, left: -1100}}>
                        {SubDirectivas[paramet].colaboradores.map((imagens, index) => (
                          <motion.div className='contenedor-imagen-card' key={index} onDoubleClick={() => setImagens(imagens)}>
                            
                            {
                              <motion.div className='contenedor-cargo-card'>
                                  <p>{imagens.cargo}</p>
                              </motion.div>
                            }

                            {
                              <img src={imagens.imags} alt='Foto' />
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
                              <img src={imagens?.imags} alt='Foto Superpuesta' />
                          }   
                  </motion.div>
                </motion.div>

                <motion.div className='popup-media' style={{ display: imgens ? 'block' : 'none' }}>
                  <motion.div >
                      <span onClick={() => setImgens(null)}>&times;</span>
                          {                               
                              <img src={imgens?.imgs} alt='Foto Superpuesta' />
                          }   
                  </motion.div>
                </motion.div>

            </div>
            
        </div>
        
      </section>
    </>
  )
}

export default EquipoSubDirectivo;