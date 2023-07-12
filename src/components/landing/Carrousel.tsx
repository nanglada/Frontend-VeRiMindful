import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Landing.css"
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
            <CarrouselDiv id="first" title={"¿Qué es el mindfulness?"} redirect="/mindfulness"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident earum labore consequuntur. Voluptates temporibus nesciunt maiores"/>
        </div>
        <div>
            <CarrouselDiv id="sixth" title={"¿Qué es la autocompasión?"} redirect="/autocompasion"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident earum labore consequuntur. Voluptates temporibus nesciunt maiores"/>
        </div>
        </Slider>
        
      </div>
    );
}