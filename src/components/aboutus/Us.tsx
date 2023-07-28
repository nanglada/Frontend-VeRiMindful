import Navbar from "../page/Navbar"
import AboutMe from "../../assets/aboutme.jpg"
import Curriculum from "../../assets/curriculum.jpg"

export default function Us(){
    return (
        <>
        <Navbar/>
        <div className="mx-12">
        <div className="md:flex place-items-center">
        <div className="md:w-1/3">
            <div className="relative top-0 left-0 grid place-items-center">
            <img src={AboutMe} alt="Verónica Riera" className="z-20 mb-16 w-3/5 h-auto rounded-full relative top-0"/>
            <div className="absolute md:top-[40%] top-12 bg-orange1 px-8 pb-2 w-4/5 rounded">
                <h2 className="mt-36 text-center text-3xl font-logo">VERÓNICA RIERA</h2>
                <p className="text-center text-xl">MSC Trained Teacher</p>
            </div>
            </div>
        </div>
        <div className="md:w-2/3 md:mt-0 mt-36">
            <h2 className="text-3xl text-blue1 font-logo text-left mb-4 md:mt-12">¿Quién soy?</h2>
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
        </div>
        </div>
        <p className="text-justify">
                Hoy, como ya lo han dicho muchas personas antes, entiendo, de verdad, que lo que 
                soy actualmente, es debido a todo lo anterior; que todas las decisiones que tomé 
                en el pasado fueron con la información, conocimiento y sabiduría que en este 
                instante tenía, por lo tanto, no vale criticarme hoy por eso; y que este nuevo 
                estilo de vida llegó cuando era el momento adecuado, cuando mi corazón y mi mente 
                estaban preparados para experimentar la vida y no solo entenderla desde la razón y 
                la eficiencia. 
        </p>
        <hr className="border-blue1 border-2 border my-8"/>
        <ul className="list-disc ml-2 grid grid-cols-2">
                <li className="mb-2">Profesora del programa de Autocompasión Consciente del Center for Mindful Self-Compassion</li>
                <li className="mb-2">Ingeniero Comercial, Universidad de Chile</li>
                <li className="mb-2">MBA, Universidad Católica</li>
                <li className="mb-2">Diplomado en Mindfulness Relacional y Prácticas de Bienestar, Universidad Adolfo Ibáñez</li>
                <li className="mb-2">Docente del Diplomado y Magister de Mindfulness Relacional y Autocompasión de la UAI</li>
                <li className="mb-2">Docente talleres MSC Universidad Adolfo Ibáñez</li>
                <li className="mb-2">Facilitadora de talleres mindfulness y autocompasión en organizaciones</li>
                <li className="mb-2">Docente de Programas Mindfulness para Empresas de la Universidad Andrés Bello</li>
            </ul>
        </div>
        </>
    )
}