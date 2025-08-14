import { Outlet } from "react-router-dom";

import Header from "../components/Header";


export default function DefaultLayout() {
  return (
    <div className="default-layout">

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