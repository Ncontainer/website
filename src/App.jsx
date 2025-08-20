import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Pages/Home'
import AboutUs from "./pages/AboutUs";
import Header from "./components/Header";
import Resources from "./Pages/Resources";
import Contact from "./Pages/Contact";
import Feedback from "./Pages/Feedback";
import DryContainer from "./Pages/DryContainer";
import Tanks from "./Pages/Tanks";
import CoilContainers from "./Pages/CoilContainers";
import ModularContainers from "./Pages/ModularContainers";
import RefrigeratedContainers from "./Pages/RefrigeratedContainers";
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import OneWayForm from "./Pages/OneWayForm";
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import VerificationPage from './pages/VerificationPage';
import LeaseForm from './pages/LeaseForm';
import TradeForm from './pages/TradeForm';
import ScrollToTop from './components/ScrollToTop';
import Footer from "./components/Footer";
import OurProducts from "./Pages/OurProducts";
import ResetPasswordPage from './components/ResetPasswordPage';
import TermsAndConditions from "./Pages/TermsAndConditions";


// function App() {
//   return (
//     <Home />
//   )
// }

// export default App


function App() {
  // Listen for popstate (back/forward navigation)


  return (
    <Router>
      <ScrollToTop />
      <Header />

      {/* Padding to offset fixed header (adjust value if your header height changes) */}
      <div className="pt-[72px]  md:pt-[70px] lg:pt-[100px] min-h-screen">
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/our-products" element={<OurProducts/>}/>
        
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify" element={<VerificationPage />} />
        <Route path="/one-way" element={<OneWayForm />} />
        <Route path="/lease" element={<LeaseForm />} />
        <Route path="/trade" element={<TradeForm />} />
        
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
        <Route path="/terms-conditions" element={<TermsAndConditions/>}></Route>
        

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;