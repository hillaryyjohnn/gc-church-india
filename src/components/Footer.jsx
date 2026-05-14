import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Ministry Info */}
        <div className="footer-about">
          <div className="footer-logo-box">
            <img
              src="/logo/logo.png"
              alt="GC Church India Logo"
              className="footer-logo"
            />

            <div>
              <h2>GC Church India</h2>
              <span>Guide of Christ Church</span>
            </div>
          </div>

          <p>
            A ministry committed to sharing the Gospel, building faith,
            conducting prayer and crusade ministries, and reaching lives through
            the love of Jesus Christ.
          </p>

          <p className="footer-founder">
            Founder & Apostle: <strong>Apostle D. Besto</strong>
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          {/* <Link to="/testimonies">Testimonies</Link> */}
          {/* <Link to="/crusades">Crusades</Link> */}
          {/* <Link to="/videos">Videos</Link> */}
          <Link to="/sow">Sow</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact</h3>

          <p>
            <strong>Phone:</strong> +91 99696 67996, +91 93234 01587
          </p>

          <p>
            <strong>WhatsApp:</strong> +91 99696 67996
          </p>

          <p>
            <strong>Email:</strong> guideofchristchurch.india@gmail.com
          </p>

          <p>
            <strong>Address:</strong> Chawl No. E/4, Room No.9, <br /> Ambedkar Nagar,
            M.L. Camp, Mumbai - 19
          </p>

          <div className="footer-social">
            <a
              href="https://www.youtube.com/@g.c.churchindia4772"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              YouTube
            </a>

            <a
              href="https://www.facebook.com/besto.peeris"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 GC Church India. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;