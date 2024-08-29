
import { Link } from "react-router-dom";
import '../../styles/CarrouselProyectos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import Proyectos from '../../pages/Proyectos/Data/Proyectos';

const CarrouselProyectos= (props)=> {

  const navigate = useNavigate();

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 2000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3 ,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return ( 
        <section >
          <div className="container-Carrousellt">
            <h1 className='title-Carrousellp'>{props.title}</h1>
            <Slider {...settings}>
            {
                  Proyectos.map((item)=>(
                    <div >
                        <div className='card-carrouselp'>
                        <figure className='imagen-carrousell'>
                            <img src={item.imagen} alt=""/>
                        </figure>
                        <div >
                          <div className='content-titul'>
                           <p>{item.titulo}</p>
                          </div>

                          <div className="descripcion-proyecto">
                            <p>{item.proyectext}</p>
                          </div>
                          <div classname="boton-vermas">
                            <Link to={`/ProyectosIndividuales/${item.id}`}>
                              <button class='btn btn-dark'>Ver más</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div> 
                   ))
               }
            </Slider>
            </div>
        </section>
     );

}

export default CarrouselProyectos;