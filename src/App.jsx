import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import {
  About,
  Contact,
  Hero,
  Navbar,
  StarsCanvas,
  Works,
  Navbottom,
} from "./components";

import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (

      <main className="relative z-0 bg-primary">
        <Router>
          <ScrollToTop/>
          <Navbar/>
          <Routes>
          <Route path="/myportfolio3d/" element={<Hero />} /> 
          <Route path="/myportfolio3d/about" element={<About />}/>           
          <Route path="/myportfolio3d/work" element={<Works />} />      
          <Route path="/myportfolio3d/contact" element={<Contact/>} />      
          </Routes>
          <Navbottom/>
          <StarsCanvas/>
        </Router>
      </main>

  );
};

export default App;
