import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top-right hamburger */}
      <div className="navbar">
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Menu */}
      {open && (
        <div className="nav-menu">
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#resume" onClick={() => setOpen(false)}>Resume</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </>
  );
};

export default Navbar;
