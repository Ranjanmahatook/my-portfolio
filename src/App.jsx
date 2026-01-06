import "./App.css";

import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import ContactForm from "./components/ContactForm";
import profile from "./assets/profile.jpg";


const App = () => {
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
            <h1>Ranjan Mahato</h1>
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
