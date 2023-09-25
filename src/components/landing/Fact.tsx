import "./Landing.css"
import Brain from '../../assets/brain-bg.png'
import { Link } from "react-router-dom";
import { useState } from "react";
  
export default function Fact() {
    let [funFact, setFunFact] = useState("El corazón del erizo late un promedio de 300 veces por minuto. El corazón del erizo late un promedio de 300 veces por minuto. El corazón del erizo late un promedio de 300 veces por minuto");

    return (
        <div className="bg-blue1 py-12 lg:justify-center lg:items-center lg:flex mt-16 grid place-items-center">
            
            <div className="lg:w-1/2 px-12">
                <h1 className="text-3xl text-center lg:text-left font-logo py-6">¿Lo sabías...?</h1>
                <p className="text-justify text-lg">{funFact}</p>
            </div>
            <img className="w-60" src={Brain}/>
        </div>
    
    );
}