import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
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
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import OneWayForm from "./Pages/OnewayForm";
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import VerificationPage from './pages/VerificationPage';
import LeaseForm from './pages/LeaseForm';
import TradeForm from './pages/TradeForm';
import ScrollToTop from './components/ScrollToTop';

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  // If not logged in, just render the children (e.g., Home), not redirect to login
  return children;
}

function App() {
  // Listen for popstate (back/forward navigation)
  React.useEffect(() => {
    const handlePopState = () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (isLoggedIn && window.location.pathname !== '/') {
        window.history.replaceState({}, '', '/');
        window.location.replace('/');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <div className="md:pt-28 pt-16"> {/* Added padding-top to account for fixed header */}
        <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products/dry_Container" element={<DryContainer />} />
        <Route path="/products/tanks" element={<Tanks />} />
        <Route path="/products/coil_containers" element={<CoilContainers />} />
        <Route path="/products/modular_containers" element={<ModularContainers />} />
        <Route path="/products/refrigerated_containers" element={<RefrigeratedContainers />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />    
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify" element={<VerificationPage />} />
        <Route path="/one-way" element={<OneWayForm />} />
        <Route path="/lease" element={<LeaseForm />} />
        <Route path="/trade" element={<TradeForm />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;