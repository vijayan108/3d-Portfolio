import { BrowserRouter } from "react-router-dom"

import {About , Contact, Experience, Feedbacks  , Hero , Navbar , Tech  , Works,StarsCanvas , Footer} from "./components"

const App= ()=> {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
      <Navbar />
        <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
          
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
      </BrowserRouter>
  )
}

export default App
