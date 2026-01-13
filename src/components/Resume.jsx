import aboutImg from "../assets/name.jpg";

const Resume = () => {
  return (
    <section id="resume" className="resume-section">

      {/* ===== About Me (NEW – added at top) ===== */}
      <div className="resume-about">
        <h2 className="resume-heading">About Me</h2>
        <p className="resume-intro">
          I am Ranjan, a software professional with around 3 years of experience
          working on React.js–based applications. I focus on building clean,
          responsive, and user-friendly interfaces while collaborating closely
          with cross-functional teams in enterprise environments.
        </p>
      </div>
 {/* Right Image */}
    <div className="about-image">
      <img src={aboutImg} alt="Ranjan Mahato" />
    </div>
      {/* ===== Experience Block 1 ===== */}
      <div className="resume-description">
        <h5 className="resume-role">Senior Analyst at Capgemini</h5>
        <ul className="resume-text">
          <li>I am currently working on a React.js–based responsive portfolio application</li>
          <li>I am currently working on a React.js–based responsive portfolio application</li>
          <li>I am currently working on a React.js–based responsive portfolio application</li>
          <li>I am currently working on a React.js–based responsive portfolio application</li>
          <li>I am currently working on a React.js–based responsive portfolio application</li>
          <li>I am currently working on a React.js–based responsive portfolio application</li>
        </ul>
      </div>

      {/* ===== Experience Block 2 (kept, but structured) ===== */}
      <div className="resume-description">
        <h5 className="resume-role">Senior Analyst at Capgemini</h5>
        <ul className="resume-text">
          <li>I am currently working on a React.js–based responsive portfolio application</li>
          <li>I am currently working on a React.js–based responsive portfolio application</li>
          <li>I am currently working on a React.js–based responsive portfolio application</li>
          <li>I am currently working on a React.js–based responsive portfolio application</li>
          <li>I am currently working on a React.js–based responsive portfolio applicationI am currently working on a React.js–based responsive portfolio application</li>
          <li>I am currently working on a React.js–based responsive portfolio application</li>
        </ul>
      </div>

      {/* ===== Resume Download ===== */}
      <div className="resume-download">
        <h2>Resume</h2>
        <p>Hi, I’m Ranjan with 3 years of experience in React.js. You can view or download my resume below.</p>

        <a href="/resume.pdf" className="resume-btn">
          View / Download Resume
        </a>
      </div>

    </section>
  );
};

export default Resume;
