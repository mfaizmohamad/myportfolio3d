import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  StarsCanvas,
  Works,
  Navbottom,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar/>
        <Hero/>
        <Navbottom/>
        <About/>
        <Tech/>
        <Works/>
        <Contact/>
        <StarsCanvas/>
      </div>
    </BrowserRouter>
  )
};

export default App;
