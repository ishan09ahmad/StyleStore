import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer";

export default function RootLayout() {
  return (
   <div className="min-h-screen max-w-full">
      <Navbar />
      <main className="min-h-[calc(100vh-64px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
