import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { motion } from 'framer-motion';
import Header from "../../components/common/Header.js";
import Footer from "../../components/common/Footer.js";
import Proyectos from "./Data/Proyectos.js";
import '../../styles/Proyectos/ProyectosIndividuales.css';

function ProyectosIndividuales () {

    const params = useParams(); 
    const [imagenPopup, setImagenPopup] = useState(null);

    const abrirPopup = (imagen) => {
        setImagenPopup(imagen);
    };

    const cerrarPopup = () => {
        setImagenPopup(null);
    };

    return (
            <>
            
            <div>
                <Header />
            </div>
        
            <div className='contenedor-general-proyectos-individuales'> 

                <div className='contenedor-titulo'>      
                    <h1>{Proyectos[params.ids].titulo}</h1>
                </div>

                <div className='contenedores-imagen'  onClick={() => setImagenPopup((Proyectos[params.ids].imagen))}> 
                    <img src={Proyectos[params.ids].imagen} alt='Foto de la Noticia' />
                </div>
                
                <section className='contenedor-texto'>
                    <p>{Proyectos[params.ids].proyectext_detalle}</p>
                </section> 

                <motion.div className='contenedor-slider'>
                    <motion.div className='slider' drag='x' dragConstraints={{right: 0, left: -1220}}>
                        {Proyectos[params.ids].imagenesurl.map((imagens, index) => (
                            <motion.div className='item' key={index} onDoubleClick={() => setImagenPopup(imagens)}>  
                                <img src={imagens} alt='Foto Superpuesta' />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div className='popup-media' style={{ display: imagenPopup ? 'block' : 'none' }}>
                    <motion.div>
                        <span onClick={()=>setImagenPopup(null)}>&times;</span>
                        <img src={imagenPopup} alt='Foto Superpuesta' />
                    </motion.div>
                </motion.div>
            </div>
        
            <div>
                <Footer />
            </div>
            </>
        
    )
}

export default ProyectosIndividuales;