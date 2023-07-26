import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Landing from '../landing/Landing';
import Mindfulness from '../definitions/Mindfulness';
import Selfcompassion from '../definitions/Selfcompassion';
 
function Routing() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<Landing />}/>
          <Route path={"/mindfulness"} element={<Mindfulness />}/>
          <Route path={"/autocompasión"} element={<Selfcompassion />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
