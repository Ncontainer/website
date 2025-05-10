import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Pages/Home'
import AboutUs from "./pages/AboutUs";
import Header from "./components/Header";
import Resources from "./Pages/Resources";
import Contact from "./Pages/Contact";
import Feedback from "./Pages/Feedback";
import Footer from "./components/Footer";
import DryContainer from "./Pages/DryContainer";
import Tanks from "./Pages/Tanks";
import CoilContainers from "./Pages/CoilContainers";
import ModularContainers from "./Pages/ModularContainers";
import RefrigeratedContainers from "./Pages/RefrigeratedContainers";  


// function App() {
//   return (
//     <Home />
//   )
// }

// export default App


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<AboutUs />} />
        <Route path="/products/dry_Container" element = {<DryContainer />} />
        <Route path="/products/tanks" element = {<Tanks />} />
        <Route path="/products/coil_containers" element = {<CoilContainers />} />
        <Route path="/products/modular_containers" element = {<ModularContainers />} />

        <Route path="/products/refrigerated_containers" element = {<RefrigeratedContainers />} />
        <Route path="/resources" element = {<Resources />} />
        <Route path="/contact" element = {<Contact />} />
        <Route path="/feedback" element = {<Feedback />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;