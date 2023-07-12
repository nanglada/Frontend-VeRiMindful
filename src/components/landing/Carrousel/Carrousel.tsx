import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../Landing.css"
import CarrouselDiv from "./CarrouselDiv";

  
export default function Carrousel() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };
    return (
      <div>
        <Slider {...settings}>
        <div>
            <CarrouselDiv id="first" title={"¿Qué es el mindfulness?"} redirect="/mindfulness" white={false}
                description='"La conciencia que surge de prestar atención, de forma intencional, a la experiencia tal y como es en el momento presente, sin juzgarla, sin evaluarla y sin reaccionar a ella" (R. Baer)'/>
        </div>
        <div>
            <CarrouselDiv id="sixth" title={"¿Qué es la autocompasión?"} redirect="/autocompasion" white={true}
                description='"La autocompasión significa ser amable y comprensivo contigo mismo cuando te enfrentas a tus errores personales y a tu sufrimiento, en lugar de ignorarte, o lo que es peor, juzgarte y criticarte por tus deficiencias." (C. Germer)'/>
        </div>
        </Slider>
        
      </div>
    );
}