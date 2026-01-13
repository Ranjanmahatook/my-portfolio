import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import profile from "./assets/profile.jpg";
import Footer from "./components/Footer";

const App = () => {
  const fullName = "< DevOps & Frontend Engineer />";
  const [displayName, setDisplayName] = useState("");
  const [index, setIndex] = useState(0);

  // Typewriter effect (runs once on first load)
  useEffect(() => {
    if (index < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayName((prev) => prev + fullName[index]);
        setIndex(index + 1);
      }, 120); // typing speed (ms)

      return () => clearTimeout(timeout);
    }
  }, [index, fullName]);

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          {/* Left image */}
          <img
            src={profile}
            alt="Ranjan Mahato"
            className="profile-img"
          />
          
          {/* Right text */}
          <div className="header-text">
           <h1 className="typewriter">
  {"Ranjan Mahato".split("").map((char, index) => (
    <span key={index} style={{ animationDelay: `${index * 0.08}s` }}>
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</h1>
 <p> {displayName}</p>

      
          </div>
        </div>
      </header>

      <Navbar />
      <Resume />
      <Skills />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
