import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fondo3 from "../../assets/fondo3.jpg";
import Fondo4 from "../../assets/fondo4.jpg";
import Fondo5 from "../../assets/fondo5.jpg";
import Fondo6 from "../../assets/fondo6.jpg";
import Fondo7 from "../../assets/fondo7.jpg";
import Fondo8 from "../../assets/fondo8.jpg";
import "./Landing.css"

  
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
            <div className="carousel-div" id="first">
                <h3>¿QUÉ ES?</h3>
                <h1>Mindfulness</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="carousel-div" id="second">
            
          </div>
          <div className="carousel-div" id="third">
          
          </div>
          <div className="carousel-div" id="fourth">
          
          </div>
          <div className="carousel-div" id="fifth">
            
          </div>
          <div className="carousel-div" id="sixth">
           
          </div>
          <div className="carousel-div" id="seventh">
          
          </div>
        </Slider>
      </div>
    );
}