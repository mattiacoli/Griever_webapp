import { Outlet } from "react-router-dom";
import { FloatButton } from 'antd';
import { MenuOutlined } from "@ant-design/icons"
import Header from "../components/Header";


export default function DefaultLayout() {
  return (
    <div className="default-layout">


      <div className="menu">
        <FloatButton icon={<MenuOutlined />}
          style={{ bottom: "1rem", right: ".5rem" }}
        />
      </div>



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