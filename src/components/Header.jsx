import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar d-flex">
        <NavLink className="navbar-brand" to="/">
          <img src="/assets/img/Logo_bw.png" alt="logo" className="logo" style={{ width: "50px" }} />
        </NavLink>

        <div className="utils d-flex gap-1">
          <Link to="/" className="utils_link" >
            Home
          </Link>
          <Link to="/about" className="utils_link">
            About
          </Link>
          <Link to="/contact" className="utils_link">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}