import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/logo/logo.png" alt="GC Church India Logo" className="logo-img" />
          <div>
            <h2>GC Church India</h2>
            <span>Gospel • Grace • Glory</span>
          </div>
        </Link>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
          <NavLink to="/testimonies" onClick={closeMenu}>Testimonies</NavLink>
          <NavLink to="/crusades" onClick={closeMenu}>Crusades</NavLink>
          <NavLink to="/videos" onClick={closeMenu}>Videos</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact Us</NavLink>
          <NavLink to="/sow" onClick={closeMenu} className="sow-btn">
            Sow
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;