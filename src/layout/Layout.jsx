import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout() {
  return (
    <>
      <div className="min-h-screen">
        <Header></Header>

        <div className="container mx-auto">
          <Outlet />
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
