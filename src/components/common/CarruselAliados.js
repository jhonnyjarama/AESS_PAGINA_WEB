import React, { useState } from "react";
import { motion } from 'framer-motion';
import { useParams } from "react-router-dom"; // Importa useParams desde react-router-dom
import Aliados from "../../pages/Comunidad/Data/Aliados";
import '../../styles/Comunidad/carouselAliados.css';

function CarruselAliados() {

  const params = useParams(); 
  const [imagens, setImagens] = useState(null);
  const [imgens, setImgens] = useState(null);

  return ( 
    <>
    <div className='contenedor-titulo-paginaa'>      
      <p>{"Aliados IEEE AESS UNI"}</p>
    </div>
    <motion.div className='contenedor-slidera'>
      <motion.div className='slidera' drag='x' dragConstraints={{right: 0, left: -3150}}>
        {Aliados[0].imagenesurl.map((imagen, index) => ( // Cambia imagens a imagen para evitar conflicto de nombres
          <motion.div className='itema' key={index} onDoubleClick={() => setImagens(imagen)}>  
            {/* Corrige la referencia a la imagen */}
            <img src={imagen.imags} alt='Foto Superpuesta' />
          </motion.div>
        ))}
      </motion.div>
    
      {/* Corrige la visualización del popup de la imagen */}
      <motion.div className='popup-media' style={{ display: imagens ? 'block' : 'none' }}>
        <motion.div>
          <span onClick={() => setImagens(null)}>&times;</span>
          {/* Corrige la referencia a la imagen */}
          <img src={imagens?.imags} alt='Foto Superpuesta' />
        </motion.div>
      </motion.div>
    
      {/* Corrige la visualización del popup de la otra imagen */}
      <motion.div className='popup-media' style={{ display: imgens ? 'block' : 'none' }}>
        <motion.div>
          <span onClick={() => setImgens(null)}>&times;</span>
          {/* Corrige la referencia a la imagen */}
          <img src={imgens?.imags} alt='Foto Superpuesta' />
        </motion.div>
      </motion.div>
    </motion.div>
    </>
  );
}

export default CarruselAliados;
