import "./Landing.css"
import MeditatingPerson from '../../assets/meditating-online.webp'
import { Link } from "react-router-dom";
import { useState } from "react";
  
export default function Fact() {
    let [funFact, setFunFact] = useState("El corazón del erizo late un promedio de 300 veces por minuto. El corazón del erizo late un promedio de 300 veces por minuto. El corazón del erizo late un promedio de 300 veces por minuto");

    return (
        <div className="lg:justify-center lg:items-center lg:flex mt-16 grid place-items-center">
            
            <div className="lg:w-1/2 px-12">
                <h1 className="text-3xl text-center lg:text-left font-logo py-6">¿Sabías que...?</h1>
                <p className="text-justify text-lg">{funFact}</p>
            </div>
            <img className="shadow-[-1rem_1rem_0_0_#FB8500] rounded-full lg:h-72 lg:w-72 h-48 w-48 object-cover" src={MeditatingPerson}/>
        </div>
    
    );
}