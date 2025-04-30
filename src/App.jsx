import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Pages/Home'
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import Header from "./components/Header";

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
        <Route path="/products" element = {<Products />} />
      </Routes>
    </Router>
  );
}

export default App;