import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="py-4 px-8 flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <div className="fixed bottom-0 left-0 right-0 flex justify-center mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
          Sticky Button
        </button>
      </div>
    </div>
  );
};

export default Layout;
