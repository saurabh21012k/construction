import { useState } from 'preact/hooks'
import 'bootstrap/dist/css/bootstrap.min.css'; // First import Bootstrap
import './assets/css/style.scss'; // Then import your custom styles

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './componants/frontend/Home';
import About from './componants/frontend/About';
import ContactUs from './componants/frontend/ContactUs';
import Projects from './componants/frontend/Projects';
import Services from './componants/frontend/Services';
import Blogs from './componants/frontend/Blogs';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        
        
     </Routes>
     </BrowserRouter>
    </>
  )
}
