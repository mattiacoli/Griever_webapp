import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar d-flex">
        <NavLink className="navbar-brand" to="/">
          <img src="/assets/img/Logo_bw.png" alt="logo" className="logo" style={{ width: "50px" }} />
        </NavLink>

        <div className="utils d-flex gap-1">
          <Link to="/bio" className="utils_link">
            Bio
          </Link>
          <Link to="/contact" className="utils_link">
            Contacts
          </Link>
          <Link to="/discography" className="utils_link">
            Discography
          </Link>
        </div>
      </nav>
    </header>
  );
}