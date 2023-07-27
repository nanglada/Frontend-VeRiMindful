import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Landing from '../landing/Landing';
import Mindfulness from '../definitions/Mindfulness';
import Selfcompassion from '../definitions/Selfcompassion';
import Us from '../aboutus/Us';
 
function Routing() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<Landing />}/>
          <Route path={"/mindfulness"} element={<Mindfulness />}/>
          <Route path={"/autocompasión"} element={<Selfcompassion />}/>
          <Route path={"/us"} element={<Us />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
