"use client";

import { useState } from "react";
import styles from "./sidebar.module.css";
import { FaAngleDoubleLeft } from "react-icons/fa";

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
        <div className={styles.explorer}>explorer</div>
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
