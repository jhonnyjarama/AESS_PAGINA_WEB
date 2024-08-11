import React from "react";
import Footer from "../../components/common/Footer.js";
import Header from "../../components/common/Header.js";
import SliderBanner from "../../components/common/SliderBanner.js";
import Carrousel from "../../components/common/Carrousel.js";
import SeccionNosotros from "../../components/common/SeccionNosotros.js";
import CarrouselVideos from "../../components/common/CarrouselVideos.js";
import CarrouselProyectos from "../../components/common/CarrouselProyectos.js";
import "../../styles/PaginaInicio.css";

const PaginaInicio = () => {
  return (
    <div className='pagina-inicio'>
      <Header />
      {/* Contenido de la página de inicio */}
      <SliderBanner />
      <Carrousel title='NOTICIAS'/>
      <SeccionNosotros />
      <CarrouselVideos title='VIDEOS'/>
      <CarrouselProyectos title='PROYECTOS'/>
      {/* Fin del contenido de la página de inicio */}
      <Footer />
    </div>
  );
};

export default PaginaInicio;
