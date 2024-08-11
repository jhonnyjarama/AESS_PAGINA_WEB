import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import EquipoDirectivo from "./EquipoDirectivo";
import CasasEstudio from "./CasasEstudio"
import EquipoSubDirectivo from "./EquipoSubdirectivo";
import TarjetaEquipo from "../../components/common/TarjetaEquipo";
import CarruselAliados from '../../components/common/CarruselAliados'
import WelcomeComunity from "./WelcomeComunity";
import Vision from "./Vision";
import Mision from "./Mision";

function PaginaComunidad (){

  return(
    <>
      <Header />

      {/* BIENVENIDOS A LA COMUNIDAD ============= */}
      <WelcomeComunity />
      {/* ======================================== */}

      {/* MISION ================================= */}
      <Mision />
      {/* ======================================== */}

      {/* VISION ================================= */}
      <Vision />
      {/* ======================================== */}

      {/* AREAS IEEE AESS UNI ==================== */}
      <TarjetaEquipo />
      {/* ======================================== */}

      {/* AREAS IEEE AESS UNI ==================== */}
      <CarruselAliados />
      {/* ======================================== */}
      
      {/* SECCION DE EQUIPO DIRECTIVO ============ */}
      <EquipoDirectivo />
      {/* ======================================== */}
      
      {/* CASAS DE ESTUDIO ======================= */}
      <CasasEstudio />
      {/* ======================================== */}
      
      {/* EQUIPO SUBDIRECTIVO ==================== */}
      <EquipoSubDirectivo />
      {/* ======================================== */}

      <Footer /> 

    </>
  )
}

export default PaginaComunidad;