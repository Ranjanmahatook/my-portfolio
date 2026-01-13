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
          <div className="skill-card"> Front-End</div>
          <div className="skill-card">HTML5</div>
          <div className="skill-card">CSS3</div>
          <div className="skill-card">Tailwind CSS</div>
          <div className="skill-card">UI/UX</div>
          <div className="skill-card">React.js</div>
          <div className="skill-card">AWS</div>
          <div className="skill-card">Devops Tools</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">TypeScript</div>
          <div className="skill-card">CI/CD Pipeline</div>
          <div className="skill-card">Kubernetes</div>
          <div className="skill-card">MySql</div>
          <div className="skill-card">mongoDb</div>
          <div className="skill-card">Core Java</div>
           <div className="skill-card">SpringBoot</div>
          <div className="skill-card">MicroServices</div>
          <div className="skill-card">EC2</div>
          <div className="skill-card">Jenkins</div>
          <div className="skill-card">Nginix</div>
          <div className="skill-card">Redux</div>
          <div className="skill-card">Git</div>
          <div className="skill-card">Github</div>
          <div className="skill-card">AWS S3</div>
          <div className="skill-card">VPCs</div>
           <div className="skill-card">Subnets</div>
          <div className="skill-card">AWS Lambda</div>
        </div>

       
      </div>
    </section>
  );
};

export default Skills;
