import React from "react";
import Header from "./components/Header";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="py-4 px-8 flex flex-col min-h-screen">
      <Header />
      <Outlet />

      <div className="fixed bottom-0 left-0 right-0 flex justify-center mb-4">
        <Link>
          <button className="bg-primary text-white px-4 py-2 rounded-full">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Layout;
