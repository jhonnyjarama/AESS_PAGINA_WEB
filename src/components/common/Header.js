import React from "react";
import { Link } from "react-router-dom";
import '../../styles/Header.css';
import imagen_Logo1 from '../../Imagenes/Inicio/imagen_Logo1.png';
import imagen_Logo2 from '../../Imagenes/Inicio/imagen_Logo2.png';
import BurgerButton from "../../utils/BurgerButton";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {

  const [clicked,setClicked]=useState(false);
  const handleClick=()=>{
    setClicked(!clicked);
  };

  const closeMenu = () => {
    setClicked(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && clicked) {    // Cerrar el menú si la ventana es más grande que 768px
        setClicked(false);
      }
    };

    window.addEventListener("resize", handleResize);  // Agregar el evento de cambio de tamaño de la ventana

    return () => {
      window.removeEventListener("resize", handleResize);  // Limpiar el evento al desmontar el componente
    };
  }, [clicked]);

  return (
    <header className='container-header'>
         <div className="container-logo">
           <figure className="">
              <img className="logo" src={imagen_Logo1} alt="imagen del logo1"/>
           </figure>
           <figure className="">
               <img className="logo" src={imagen_Logo2} alt="imagen del logo2" />
           </figure>
         </div>
          <ul className={`nav-list ${clicked ? 'nav-active':''}`}>
             <li>
               <Link to="/" onClick={closeMenu}>INICIO</Link>
             </li>
             <li>
               <Link to="/PaginaNoticias" onClick={closeMenu}>NOTICIAS</Link>
             </li>
             <li>
                <Link to="/PaginaComunidad" onClick={closeMenu}>COMUNIDAD</Link>
             </li>
             <li>
               <Link to="/PaginaProyectos" onClick={closeMenu}>PROYECTOS</Link>
            </li>
          </ul>
          <div className='burger'>
          <BurgerButton clicked={clicked} handleClick={handleClick}/>
          </div>
          <div className={`initial ${clicked ? 'active':''}`}></div>
    </header>
  );
};

export default Header;