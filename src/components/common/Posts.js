import React from 'react';
import '../../styles/Noticias/Posts.css';
import postData from '../../pages/Noticias/Data/postData';

function Posts () {
    return(
        <>
            {postData.map((postd, index) => (
            <div key={index} className='contenedor-posts'>
                <img 
                        className='imagen-posts'
                        src={postd.imagen}
                        alt='Foto de Aess'
                />
                <div className='contenedor-texto-posts'>
                    {postd.titulo}
                    <p className='frase-posts'>"{postd.frase}".</p>
                </div>
            </div>
            ))}
        </>              
    )
}

export default Posts;