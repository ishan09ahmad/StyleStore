import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer";

export default function RootLayout() {
  return (
    <div className="w-screen min-h-screen ">
      <Navbar />
      <main>
        <Outlet />
      </main>
  <Footer/>
    </div>
  )
}
