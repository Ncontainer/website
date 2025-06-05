import { useState } from "react";

import HexagonalWorldMap from "../components/HexagonalWorldMap"
import ContactUs from "../components/ContactUs";
import OurTeam from "../components/OurTeam";
import blog from "../images/04.png"
import NewsLetter from "../components/NewsLetter";

function Contact() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleSubmit = () => {
    if (email && email.includes('@')) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

    return (
      <>
      <HexagonalWorldMap />
      <OurTeam />
      <ContactUs />
         {/* Newsletter Subscription */}
     <div className="flex w-full justify-center items-center  py-8">
    <NewsLetter />
     </div>
      </>
    );
  }
  
  export default Contact;