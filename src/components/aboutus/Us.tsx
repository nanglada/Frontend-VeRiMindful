import Navbar from "../page/Navbar"
import AboutMe from "../../assets/aboutme.jpg"
import Curriculum from "../../assets/curriculum.jpg"

export default function Us(){
    return (
        <>
        <Navbar/>
        <div>
        <div className="md:flex place-items-center">
        <div className="grid place-items-center md:w-1/3 md:ml-16 mt-[60%] relative md:mt-24 mx-8 md:mx-0">
            <img src={AboutMe} alt="Verónica Riera" className="z-20 w-2/3 h-auto rounded-full absolute mb-60"/>
            

            <div className="pb-4 rounded absolute w-full bg-orange1">
                <h2 className="mt-44 text-center text-3xl font-logo">VERÓNICA RIERA</h2>
                <p className="text-center text-xl">MSC Trained Teacher</p>
                
            </div>
            <ul className="list-disc">
                <li>Profesora del programa de Autocompasión Consciente del Center for Mindful Self- Compassion</li>
                <li>Ingeniero Comercial, Universidad de Chile</li>
                <li>MBA, Universidad Católica</li>
                <li>Diplomado en Mindfulness Relacional y Prácticas de Bienestar, Universidad Adolfo Ibáñez</li>
                <li>Docente del Diplomado y Magister de Mindfulness Relacional y Autocompasión de la Universidad Adolfo Ibáñez</li>
                <li>Docente talleres MSC Universidad Adolfo Ibáñez</li>
                <li>Co-Gestora de BrotaConsult</li>
                <li>Facilitadora de talleres mindfulness y autocompasión en organizaciones</li>
                <li>Docente de Programas Mindfulness para Empresas de la Universidad Andrés Bello</li>
            </ul>
        </div>
        <div className="md:w-2/3 md:mx-12 mx-8">
            <h2 className="text-3xl text-blue1 font-logo text-left mb-4 md:mt-12 mt-48">¿Quién soy?</h2>
            <p className="text-justify mb-2">
                Cuando me piden que me presente en ámbitos laborales, digo que soy ingeniero 
                comercial de formación, con más de 20 años de trabajo en cargos ejecutivos en 
                empresas y que ahora hago clases de mindfulness. Por cierto, 20 años maravillosos 
                de desarrollo y aprendizaje, y también de mucha convivencia con quien era mi 
                acompañante inseparable: el piloto automático. En ese momento no lo entendí así, 
                era la manera que conocía de funcionar y para mí estaba perfecto. 
            </p>
            <p className="text-justify mb-2">
                Hace ya más de 10 años que no trabajo formalmente en organizaciones. Conocí el 
                mindfulness y con él, una manera de vivir con atención y presencia mis experiencias.
                En este nuevo camino apareció ante mí una vida de mayor bienestar, más aceptación, 
                menos crítica, con la que me puedo conectar mejor, con imágenes más nítidas y, 
                dentro de la locura del mundo en el que habitamos, una vida más calmada. 
            </p>
            <p className="text-justify mb-2">
                Practico, aprendo y enseño mindfulness cada día. He tenido y tengo bellos maestros, 
                de los que aprendo cada vez más y eso, sumando a mi práctica diaria, es lo que 
                trato, humildemente, de transmitir a quienes hacen un taller o con quienes tengo el 
                honor de compartir mi vida.entro de la locura del mundo en el que habitamos, una 
                vida más calmada. 
            </p>
            <p className="text-justify mb-2">
                Hoy ya aprendí a no lamentarme por haber pasado gran parte de mi vida en 
                automático, realizando múltiples actividades en paralelo, criticándome cuando no 
                alcanzaba mis objetivos o cometía un error y exigiéndome más allá de mis 
                posibilidades, muchas veces. 
            </p>
            <p className="text-justify mb-2">
                Hoy, como ya lo han dicho muchas personas antes, entiendo, de verdad, que lo que 
                soy actualmente, es debido a todo lo anterior; que todas las decisiones que tomé 
                en el pasado fueron con la información, conocimiento y sabiduría que en este 
                instante tenía, por lo tanto, no vale criticarme hoy por eso; y que este nuevo 
                estilo de vida llegó cuando era el momento adecuado, cuando mi corazón y mi mente 
                estaban preparados para experimentar la vida y no solo entenderla desde la razón y 
                la eficiencia. 
            </p>
        </div>
        </div>
        {/* <div className="my-8 place-items-center mx-16">
            <h1 className="text-3xl text-blue1 font-logo text-left mb-4">Mis antecedentes</h1>      
            
        <div className="flex">
            <div>
            <h2 className="text-xl font-semibold text-left mb-4 underline">Mis roles</h2>
            <ul className="list-disc ml-4 marker:text-orange">
                <li>Profesora del programa de Autocompasión Consciente del Center for Mindful Self- Compassion</li>
                <li>Ingeniero Comercial, Universidad de Chile</li>
                <li>MBA, Universidad Católica</li>
                <li>Diplomado en Mindfulness Relacional y Prácticas de Bienestar, Universidad Adolfo Ibáñez</li>
                <li>Docente del Diplomado y Magister de Mindfulness Relacional y Autocompasión de la Universidad Adolfo Ibáñez</li>
                <li>Docente talleres MSC Universidad Adolfo Ibáñez</li>
                <li>Co-Gestora de BrotaConsult</li>
                <li>Facilitadora de talleres mindfulness y autocompasión en organizaciones</li>
                <li>Docente de Programas Mindfulness para Empresas de la Universidad Andrés Bello</li>
            </ul>
            </div>
            <div>
            <h2 className="text-xl font-semibold text-left mb-4 underline">Cursos, seminarios y otras formaciones</h2>
            <ul className="list-disc ml-4 marker:text-orange">
                <li>Curso Neurociencia “La Mente como aliado”, Nazareth Castellanos, 2022</li>
                <li>Programa MBSR, 8 semanas, Carla García, 2020</li>
                <li>Curso Formando Directores de Empresas, Universidad Adolfo Ibáñez, 2019</li>
                <li>Mindful Self-Compassion Teacher Training, Center for Mindfulf Self-Compassion y AEMIND, Madrid, España, 2018</li>
                <li>Introducción a la Psicología Budista, Instituto Mindfulness, 2018</li>
                <li>Curso Terapia Centrada en la Compasión, Universidad Austral de Chile, 2017</li>
                <li>Entrenamiento de Mindfulness y Autocompasión AEMIND (Bilbao, España), 2016</li>
                <li>Taller Introducción de Mindfulness, Instituto de Mindfulness, 2014</li>
            </ul>
            </div>
        </div>
        </div> */}
        </div>
        </>
    )
}