import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div className="default-layout">

      <header>

      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Default Layout Footer</p>
      </footer>
    </div>
  );
}