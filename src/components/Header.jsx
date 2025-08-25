import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar d-flex align-items-center justify-content-between px-3">
        <NavLink className="navbar-brand" to="/">
          <img src="/assets/img/Logo_bw.png" alt="logo" className="logo" style={{ width: "50px" }} />
        </NavLink>

        <h1>GRIEVER</h1>

        <div className="utils d-flex gap-1">
          <Link to="/bio" className="utils_link">
            Chi siamo
          </Link>
        </div>


      </nav>
    </header>
  );
}