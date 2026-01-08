import { FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wz3ihqo",
        "template_xhdydhp",
        formRef.current,
        "zNq0nTEObgVeEisSY"
      )
      .then(
        () => {
          alert("Email sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send email");
          console.error(error);
        }
      );
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title" style={{ color: "#4f46e5" }}>
        Contact Me
      </h2>

      <p className="contact-subtitle" style={{ color: "#161802ff" }}>
        Let’s discuss opportunities
      </p>

      {/* ===== Icons Wrapper (spacing handled here) ===== */}
      <div className="contact-icons-wrapper">
        <div className="contact-icons">
          <a
            href="mailto:i.ranjan1115@gmail.com"
            className="icon email"
            aria-label="Email"
          >
            <MdEmail />
          </a>

          <a
            href="https://www.linkedin.com/in/ranjan-kumar-8945691b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon linkedin"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/Ranjanmahatook"
            target="_blank"
            rel="noopener noreferrer"
            className="icon github"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://wa.me/917300471976"
            target="_blank"
            rel="noopener noreferrer"
            className="icon whatsapp"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* ===== Contact Form ===== */}
      <form ref={formRef} onSubmit={sendEmail} className="contact-card">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" required />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            rows="4"
            placeholder="Briefly describe your requirement"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
