import React from "react";
import Sidebar from "../Sidebar";
import styles from "./index.module.css";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className={styles.children}>
        <div className="px-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
