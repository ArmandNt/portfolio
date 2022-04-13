import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<></>}>
        <Outlet />
      </Suspense>
      <Footer nom="Armand Ntawebangana"></Footer>
    </>
  );
}
