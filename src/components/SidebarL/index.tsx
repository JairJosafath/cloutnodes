"use client";

import { useState } from "react";
import styles from "./sidebar.module.css";
import { FaAngleDoubleLeft } from "react-icons/fa";
import Page from "../Page";

export default function SidebarL() {
  const [isOpen, setIsOpen] = useState(false);
  const label = isOpen ? "Close" : "Open";
  const classname = isOpen ? styles["open"] : styles["closed"];
  return (
    <div className={classname + " " + styles.sidebar}>
      <button className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
        <FaAngleDoubleLeft />
      </button>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h5>User Name</h5>
        </div>
        {/* Explorer */}
        <div className={styles.explorer}>
          {[
            { page: "Page 1", subpages: false },
            {
              page: "Page 2",
              subpages: true,
            },
            { page: "Page 3", subpages: false },
          ].map((item) => (
            <Page key={item.page} label={item.page} subPages={item.subpages} />
          ))}
        </div>
        {/* Footer */}
        <div className={styles.footer}>
          {["Account", "Settings", "Sign Out"].map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
