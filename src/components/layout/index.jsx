import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "./layout.scss";

export default function Layout() {
  return (
    <div className="layout">
      <div className="layout__inner">
        <Header />

        <main className="layout__content">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}
