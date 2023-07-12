import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fondo1 from "../../assets/fondo1.jpg";
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
            <img className="h-136 w-full object-cover" src={Fondo1}/>
            
          </div>
          <div>
            <img className="h-136 w-full object-cover" src={Fondo3}/>
          </div>
          <div>
            <img className="h-136 w-full object-cover" src={Fondo4}/>
          </div>
          <div>
            <img className="h-136 w-full object-cover" src={Fondo5}/>
          </div>
          <div>
            <img className="h-136 w-full object-cover" src={Fondo6}/>
          </div>
          <div>
            <img className="h-136 w-full object-cover" src={Fondo7}/>
          </div>
          <div>
            <img className="h-136 w-full object-cover" src={Fondo8}/>
          </div>
        </Slider>
      </div>
    );
}