
import '../../styles/Carrousel.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import Noticieros from '../../pages/Noticias/Data/Noticieros';

const Carrousel= (props)=> {  

  const navigate = useNavigate();

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: true,
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
        <section className='container-Carrousellalfa'>
          <div className='container-Carrousell'>
            <h1 className='title-Carrouselln'>{props.title}</h1>
            <Slider {...settings}>
            {
                  Noticieros.map((item)=>(
                    <div >
                        <div className='card-carrouseln'>
                          <figure className='imagen-nosotros'>
                              <img src={item.imagen[0].imgs} alt=""/>
                          </figure>
                          <div>
                            <div className='card-title'>
                              <p>{item.titulo}</p>
                            </div>
                            <div className='card-paragraph'>
                              <p>{item.texto}</p>
                            </div>
                              <button type='button' class='btn btn-dark' onClick={() => navigate(`/NoticiasIndividuales/${item.id}`)}>Ver Más</button>
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

export default Carrousel;

//se importo el slider de react-slick, para generar un carrousel , mas informacion : https://react-slick.neostack.com/docs/example/simple-slider/