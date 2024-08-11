import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { motion } from 'framer-motion';
import Header from '../../components/common/Header.js';
import Footer from '../../components/common/Footer.js';
import Noticieros from "./Data/Noticieros.js";
import '../../styles/Noticias/NoticiasIndividuales.css';

function NoticiasIndividuales () {

    const params = useParams(); 
    const [imagens, setImagens] = useState(null)
    const [imgens, setImgens] = useState(null)

    return (
        <div className="pagina-noticia-individuales">
        <div>
            <Header />
        </div>
        <div> 
            <div className='contenedor-pagina-noticias-individuales'> 
                
                <div className='contenedor-titulo-pagina'>      
                    <h1>{Noticieros[params.ids].titulo}</h1>
                </div>
                <div className='contenedor-imagen-posts'>
                    {Noticieros[params.ids].imagen.map((imgens, index) => (
                    <div className='contenedores-izquierda' key={index} onDoubleClick={() => setImgens(imgens)}> 
                        {
                            <img src={imgens.imgs} alt='Foto de la Noticia' /> 
                        }
                    </div>
                    ))}
                    <section className='contenedores-derecha'>
                        <section className='contenedor-posts-noticia-secundario'>

                            {/*<p>{Noticieros[params.ids].noticia}</p>*/}
                            <div className="scrollbar-text">
                                <p>{Noticieros[params.ids].noticia}</p>
                            </div>

                        </section> 
                        <section className='contenedor-posts-leyenda'>
                            <p>Fecha: {Noticieros[params.ids].fecha}</p>
                            <p>Autor: {Noticieros[params.ids].autor}</p>
                        </section>
                    </section>
                </div>

                <motion.div className='contenedor-slider-in'>
                    <motion.div className='slider' drag='x' dragConstraints={{right: 0, left: -3150}}>
                        {Noticieros[params.ids].imagenesurl.map((imagens, index) => (
                            <motion.div className='item' key={index} onDoubleClick={() => setImagens(imagens)}>  
                                {
                                    <img src={imagens.imags} alt='Foto Superpuesta' />
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
        <div>
            <Footer />
        </div>
        </div>
    )
}

export default NoticiasIndividuales;