

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>Mywoods</h2>
          <p>
            Creating modern, responsive, and user-friendly web experiences.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/woods">Woods</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: hello@example.com</p>
          <p>Phone: +91 9876543210</p>
          <p>India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} MyWebsite. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;