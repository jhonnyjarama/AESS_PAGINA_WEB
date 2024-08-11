
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../../styles/SliderBanner.css'

const images = [
    /*{original: require(`../../Imagenes/Inicio/los-pre-2024-1.jpg`)},
    {original: require(`../../Imagenes/Inicio/los-pre-2024-2.jpg`)},
    {original: require(`../../Imagenes/Inicio/los-pre-2024-3.jpg`)},
    {original: require(`../../Imagenes/Inicio/los-pre-2024-4.jpg`)},
    {original: require(`../../Imagenes/Inicio/los-pre-2024-5.jpg`)},*/ 

    {original: require(`../../Imagenes/Inicio/apsco1.jpg`)},
    {original: require(`../../Imagenes/Inicio/espacio2.jpg`)},
    {original: require(`../../Imagenes/Inicio/paulet3.jpg`)},
    {original: require(`../../Imagenes/Inicio/pi4.jpg`)},
    {original: require(`../../Imagenes/Inicio/mujer5.jpg`)}, 
    {original: require(`../../Imagenes/Inicio/aess6.jpg`)}, 
];

const SliderBanner=()=> {
    return (
        <section>
           <ImageGallery items={images}
             showBullets={true}
             showPlayButton={false}
             showFullscreenButton={true}
             autoPlay={true}
             slideInterval={8000}
             slideDuration={1000}
             />
        </section>
    );
}

export default SliderBanner;

//Se importo el slider de https://www.npmjs.com/package/react-image-gallery para crear un slides dinamico.