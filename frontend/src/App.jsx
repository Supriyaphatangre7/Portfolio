import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Project from "./components/Project";
import VirtualTry from "./components/VirtualTry";
import Recipeshare from "./components/Recipeshare";
import Eventproject from "./components/Eventproject";
import Pet from "./components/Pet";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/gallery" element={<Gallery />} />
         <Route path="/project" element={<Project />} />
         <Route path="/virtual" element={<VirtualTry />} />
         <Route path="/recipe" element={<Recipeshare />} />
         <Route path="/event" element={<Eventproject />} />
         <Route path="/pet" element={<Pet />} />
      </Routes>
    </BrowserRouter>
  );
}
