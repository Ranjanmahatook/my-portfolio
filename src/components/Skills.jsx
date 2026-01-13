import skillsImage from "../assets/img.jpg"; // adjust path if needed

const Skills = () => {
  return (
    <section id="skills" className="skills-bg">
      <div className="skills-container">
        <h2 className="skills-title">KEY SKILLS</h2>
 {/* 🔽 Image below skills */}
        <div className="skills-image-wrapper">
          <img
            src={skillsImage}
            alt="Skills illustration"
            className="skills-image"
          />
        </div>
        <div className="skills-grid">
          <div className="skill-card">React</div>
          <div className="skill-card">AWS</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">Express.js</div>
          <div className="skill-card">Google Cloud</div>
          <div className="skill-card">Azure Cloud</div>
          <div className="skill-card">Azure Cloud</div>
          <div className="skill-card">Azure Cloud</div>
          <div className="skill-card">Azure Cloud</div>
          <div className="skill-card">Azure Cloud</div>
           <div className="skill-card">React</div>
          <div className="skill-card">AWS</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">Express.js</div>
          <div className="skill-card">Google Cloud</div>
          <div className="skill-card">Azure Cloud</div>
          <div className="skill-card">Azure Cloud</div>
          <div className="skill-card">Azure Cloud</div>
          <div className="skill-card">Azure Cloud</div>
          <div className="skill-card">Azure Cloud</div>
          <div className="skill-card">Azure Cloud</div>
          <div className="skill-card">Azure Cloud</div>
          <div className="skill-card">Azure Cloud</div>
          <div className="skill-card">Azure Cloud</div>
          <div className="skill-card">Kubernetes</div>
           <div className="skill-card">Azure Cloud</div>
          <div className="skill-card">Kubernetes</div>
        </div>

       
      </div>
    </section>
  );
};

export default Skills;
