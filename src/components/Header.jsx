import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar d-flex">
        <Link to={"/"} className="navbar-brand ">
          <img src="../assets/img/Logo_bw.png" alt="" />
        </Link>
      </nav>
    </header>
  );
}