import React from "react";
import Header from "../../components/common/Header.js";
import Footer from "../../components/common/Footer.js";
import TarjetaProyecto from "../../components/common/TarjetaProyecto.js";

function PaginaProyectos () {

    /*PAGINA PROYECTOS*/
    return (
        <>
          <div>
            {/*MOSTRANDO ENCABEZADO*/}
            <Header />
          </div>
          <div > {/*className='container'*/}
              {/*MOSTRANDO PROYECTOS*/}
              <TarjetaProyecto />
          </div>
          <div>
            {/*MOSTRANDO AL COMPONENTE PIE DE PAGINA*/}
            <Footer />
          </div>
        </>
    ) 
}

export default PaginaProyectos;