import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Landing from '../landing/Landing';
import Mindfulness from '../definitions/Mindfulness';
import Selfcompassion from '../definitions/Selfcompassion';
import Us from '../aboutus/Us';
import Courses from '../courses/Courses';
import NewCourse from '../courses/NewCourse';
import News from '../news/News';
import NewNews from '../news/NewNews';
import Login from '../auth/Login';
 
function Routing() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<Landing />}/>
          <Route path={"/mindfulness"} element={<Mindfulness />}/>
          <Route path={"/autocompasión"} element={<Selfcompassion />}/>
          <Route path={"/quién soy"} element={<Us />}/>
          <Route path={"/cursos"} element={<Courses />}/>
          <Route path={"/nuevo curso"} element={<NewCourse />}/>
          <Route path={"/artículos"} element={<News />}/>
          <Route path={"/nuevo artículo"} element={<NewNews />}/>
          <Route path={"/iniciar sesión"} element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
