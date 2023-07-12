import "./Landing.css"
import MeditatingPerson from '../../assets/meditating-online.webp'
  
export default function Courses() {
    return (
      <div className="grid place-items-center mt-20">
        <div className="flex">
            <img className="rounded-full h-72 mr-12 w-72 object-cover" src={MeditatingPerson}/>
            <div className="w-2/3">
            <h1 className="text-3xl mt-12 font-logo">Conoce nuestros próximos cursos</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quos quae voluptates repellat expedita possimus, facere fugiat deleniti laborum nulla maxime aspernatur libero optio eaque dolor nisi eum voluptatum tenetur!</p>
            </div>
            
        </div>
        
      </div>
    );
}