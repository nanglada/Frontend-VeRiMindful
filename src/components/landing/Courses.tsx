import "./Landing.css"
import MeditatingPerson from '../../assets/meditating-online.webp'
import { Link } from "react-router-dom";
  
export default function Courses() {
    return (
        <div className="justify-center items-center mt-16 flex">
            {/* <img className="shadow-[-1rem_1rem_0_0_#219EBC] rounded-full h-72 w-72 object-cover" src={MeditatingPerson}/> */}
            <img className="shadow-[-1rem_1rem_0_0_#FB8500] rounded-full h-72 w-72 object-cover" src={MeditatingPerson}/>
            <div className="w-1/2 px-12">
                <h1 className="text-3xl font-logo py-6">Conoce nuestros próximos cursos</h1>
                <p className="text-justify text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quos quae voluptates repellat expedita possimus, facere fugiat deleniti laborum nulla maxime aspernatur libero optio eaque dolor nisi eum voluptatum tenetur!</p>
                <p className="text-justify text-lg py-6">¡Anímate a inscribirte! Para saber más, haz <Link to='/cursos' className="text-blue1 font-semibold underline">click aquí</Link>. </p>
            </div>
            
        </div>
    
    );
}