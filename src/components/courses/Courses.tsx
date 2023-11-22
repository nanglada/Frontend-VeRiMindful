import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../page/Navbar";
import IMAGEn from "../../assets/fondo1.jpeg";
import Modal from "../common/Modal";
import CourseDescription from "./CourseDescription";
import { Link } from "react-router-dom";
import Loading from "../common/Loading";

// let courses = [
//     {"title": "Curso de Mindfulness Introductorio", "contact": "veronicarieram@gmail.com", "sessions": 8, "valid": true, "format": "Online", "dates": "20, 27 julio - 3, 10 agosto", "hour": "18:00",
//     "description": "Curso online de mindfulness, horario PM. Si buscas reducir el estrés, aumentar tu concentración y encontrar un equilibrio en tu vida cotidiana, este taller podría interesarte. Experimentar la vida en piloto automático acarrea dos grandes problemas: perdemos conexión con la realidad y con el bienestar, y nos hace mantener el sistema nervioso siempre a pleno rendimiento, ya que nunca se relaja, lo que tiene implicaciones para la salud mental. Este taller introductorio de mindfulnes, consiste en 4 sesiones online (una semanal), de 2 horas cada una, los jueves 20-27 julio, 3-10 agosto de 19:00 a 21:00 hrs. Las actividades del curso incluyen meditaciones, charlas breves, ejercicios experienciales, diálogo y prácticas para la casa."},
//     {"title": "Titulo 2", "contact": "veronicarieram@gmail.com", "sessions": 6, "valid": false, "format": "Online", "dates": "01/02/23 - 02/03/23", "hour": "18:00", "description": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum"},
//     {"title": "Titulo 3", "contact": "veronicarieram@gmail.com", "sessions": 6, "valid": true, "format": "Online", "dates": "01/02/23 - 02/03/23", "hour": "18:00", "description": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum"},
// ]
export default function Courses() {
  let [courses, setCourses] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    getCourses();
  }, []);

  async function getCourses() {
    try {
      let res = await axios.get("http://localhost:3000/courses/");
      await setCourses(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      {!loading ? (
        <>
          <div className="grid place-items-center mt-8">
            <h1 className="text-3xl font-logo text-orange1 mb-2">
              Próximos talleres
            </h1>
            <h3 className="mb-8">
              Facilitadora:{" "}
              <a href="/quién soy" className="underline hover:text-blue1">
                Verónica Riera
              </a>
            </h3>
            {courses.map((course: any, index: number) => (
              <>
                {course.valid ? (
                  <>
                    <Modal
                      open={<CourseDescription course={course} index={index} />}
                      title={`${course.title} (formato ${course.format})`}
                      text={course.description}
                      contact={`Consulta el precio y más detalles por WhatsApp o correo (${course.contact}).`}
                      subtitle={`Horario ${course.hour} durante ${course.sessions} sesiones (${course.dates})`}
                    />
                  </>
                ) : null}
              </>
            ))}
          </div>
        </>
      ) : (
        <>
          <Loading />
        </>
      )}

      {/* {
            (admin) ? ( */}
      <>
        <p className="mx-32">
          Hola Verónica. ¿Quieres agregar un curso nuevo? Haz{" "}
          <Link
            to="/nuevo curso"
            className="underline text-blue1 hover:font-semibold"
          >
            click aquí
          </Link>
        </p>
      </>
      {/* ) : null
        } */}
    </>
  );
}
