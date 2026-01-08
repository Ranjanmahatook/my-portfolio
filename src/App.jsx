import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import ContactForm from "./components/ContactForm";
import profile from "./assets/profile.jpg";

const App = () => {
  const fullName = "Ranjan Mahato !";
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
              {displayName}
            </h1>

            <p>DevOps & Frontend Engineer</p>
          </div>
        </div>
      </header>

      <Navbar />
      <Skills />
      <Resume />
      <ContactForm />
    </div>
  );
};

export default App;
