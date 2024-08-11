import React from "react";
import Posts from "../../components/common/Posts.js";
import Header from "../../components/common/Header.js";
import Footer from "../../components/common/Footer.js";
import TarjetaNoticia from "../../components/common/TarjetaNoticia.js";
import '../../styles/Noticias/PaginaNoticias.css';

function PaginaNoticias () {

    /*PAGINA NOTICIAS*/
    return (
        <div className="pagina-noticia">
            <div>
                {/*MOSTRANDO ENCABEZADO*/}
                <Header />
            </div> 
            <div > {/*className='container'*/}
                {/*MOSTRANDO EL COMPONENTE DEL POSTS*/}
                <Posts />
            </div>
            <div > {/*className='container'*/}
                {/*MOSTRANDO TARJETA NOTICIA*/}
                <TarjetaNoticia />
            </div>
            <div>
                {/*MOSTRANDO AL COMPONENTE PIE DE PAGINA*/}
                <Footer />
            </div>
        </div>
    ) 
}

export default PaginaNoticias;