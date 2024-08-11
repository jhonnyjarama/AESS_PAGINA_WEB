import React, { useState } from 'react';
import '../../styles/CarrouselVideos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from 'react-player';
import videosData from '../../pages/Inicio/Data/videosData';

const Carrousel= (props)=> {

  const [item, setItem] = useState(null)

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
              slidesToScroll: 3,
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
          <div className='container-Carrouseles'>
            <h1 className='title-Carrousellv'>{props.title}</h1>
            <Slider {...settings}>
            {videosData.map((item, index)=>(
                <div key={index} className='container-card-carrousel' >
                        <div className='card-carrouselv'>
                            <figure className='imagen-carrousel'>
                                <ReactPlayer url={item.url} controls />
                            </figure>
                      </div>
                </div> 
                ))}
            </Slider>
            </div>
        </section>
      
    )

}

export default Carrousel;

//se importo el slider de react-slick, para generar un carrousel , mas informacion : https://react-slick.neostack.com/docs/example/simple-slider/