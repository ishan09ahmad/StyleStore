import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer";

export default function RootLayout() {
  return (
    <div className="max-w-full min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
