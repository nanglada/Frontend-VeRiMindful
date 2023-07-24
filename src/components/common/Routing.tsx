import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Landing from '../landing/Landing';
import Mindfulness from '../definitions/Mindfulness';
 
function Routing() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<Landing />}/>
          <Route path={"/mindfulness"} element={<Mindfulness />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
