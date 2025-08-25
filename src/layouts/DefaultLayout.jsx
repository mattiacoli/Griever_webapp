import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Fab from "../components/Fab";

export default function DefaultLayout() {
  return (
    <div className="default-layout">

      <Fab />

      <Header />

      <main className="my-4 min-vh-100">
        <Outlet />
      </main>

      <footer>
        <p>Default Layout Footer</p>
      </footer>
    </div>
  );
}