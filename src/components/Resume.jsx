import aboutImg from "../assets/name.jpg";

const Resume = () => {
  return (
    <section id="resume" className="resume-section">

      {/* ===== About Me (NEW – added at top) ===== */}
      <div className="resume-about">
        <h2 className="resume-heading">About Me</h2>
        <p className="text-center text-xl font-semibold">
          I am Ranjan, a software professional with around 3 years of experience
          working on React.js–based applications. I focus on building clean,
          responsive, and user-friendly interfaces while collaborating closely
          with cross-functional teams in enterprise environments.
        </p>
      </div>
  {/* ===== Experience Block 2 (kept, but structured) ===== */}
      <div className="resume-description">
        <h5 className="resume-role">Senior Analyst at Capgemini -  Nov 2024 - Present</h5>
          <p className="text-left leading-relaxed mt-2">Worked on the development and enhancement of the Point of Sale (POS) UI for a large-scale enterprise
            system deployed across 2,000+ restaurant locations, improving performance, usability, and accessibility.</p>
          <p className="text-left leading-relaxed mt-2">Working on the development, enhancement, and stability of a large-scale, cloud-native Point of Sale (POS) platform deployed across 2,000+ restaurant locations. Responsible for improving frontend performance, usability, and accessibility using React best practices, while ensuring smooth API integration and real-time transaction workflows. Actively contributing to Agile delivery by implementing user stories, resolving critical defects, and collaborating with cross-functional teams. Supporting the reliability and scalability of the platform through Kubernetes (AWS EKS)–based microservices infrastructure, with a focus on availability, fault tolerance, and secure transaction processing.</p>
      </div>
      {/* ===== Experience Block 1 ===== */}
      <div className="resume-description">
        <h5 className="resume-role">Analyst at Capgemini- Nov 2022- Nov 2024</h5>
        <p className="text-left leading-relaxed mt-2">Supported the development and stability of a large-scale Point of Sale (POS) application by contributing to frontend feature enhancements and performance improvements under senior guidance. Actively involved in building React components, resolving UI issues, and integrating frontend modules with backend APIs while following design and accessibility standards. Gained hands-on experience in frontend performance optimization, Agile delivery, and production support. Additionally contributed to DevOps activities by assisting with zero-downtime deployment strategies and CI/CD pipelines using Jenkins, Git, Docker, and Ansible to ensure reliable and consistent production releases.</p>
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
