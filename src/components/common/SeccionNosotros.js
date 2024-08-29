
import React from 'react';
import '../../styles/SeccionNosotros.css';
import nosotrosData from '../../pages/Inicio/Data/nosotrosData';

const SeccionNosotros=()=> {
    return (
      <div >
        {nosotrosData.map(nosotro => (
        <section className='container_description'>
            <div className='description_text'>
              <h1>{nosotro.title}</h1>
              <div >
                <p>{nosotro.content}</p>
              </div>
              <button className="Btn_description">Ver Detalles</button>
            </div>
            <figure className='description_imagen'>
               <img src={nosotro.imageUrl} alt="imagen"/>
            </figure>
        </section>
        ))}
      </div>
    )
}

export default SeccionNosotros;