

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          <h1>Mywoods</h1>
        </Link>
      </div>

      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/woods">Woods</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cms">CMS</Link></li>
          <li><Link to="/todo">To-Do</Link></li>
        </ul>
      </nav>

      <Link to="/contact" className="btn">Get Started</Link>
    </header>
  );
}

export default Header;