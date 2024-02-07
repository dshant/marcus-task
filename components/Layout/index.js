import React from "react";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="min-w-[calc(100%_-_72px)] md:min-w-[calc(100%_-_16rem)] ml-[72px] md:ml-64">
        <div className="px-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
