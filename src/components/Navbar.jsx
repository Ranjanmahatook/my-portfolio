import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="navbar">
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Overlay (click outside) */}
      {open && (
        <div
          className="menu-overlay"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Menu */}
      {open && (
        <div
          className="nav-menu"
          onClick={(e) => e.stopPropagation()}
        >
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#resume" onClick={() => setOpen(false)}>Resume</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </>
  );
};

export default Navbar;
