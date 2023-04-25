"use client";

import { FaArrowDown, FaCaretDown, FaCaretRight } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import styles from "./page.module.css";
import { useState } from "react";
export default function Page({
  label,
  subPages,
}: {
  label: string;
  subPages: boolean;
}) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={styles.page}>
        {subPages ? (
          <FaCaretRight
            className={styles[show ? "open" : "close"]}
            onClick={() => setShow(!show)}
          />
        ) : (
          <FaCaretRight className={styles.transparent} />
        )}
        <h4>{label}</h4>
        <BsThreeDotsVertical className={styles.dots} />
      </div>
      {subPages && show && (
        <div className={styles.subcontent}>
          {[
            { page: "Page 1", subpages: false },
            {
              page: "Page 2",
              subpages: false,
            },
            { page: "Page 3", subpages: false },
          ].map((item, index) => (
            <Page key={item.page} label={item.page} subPages={item.subpages} />
          ))}
        </div>
      )}
    </>
  );
}
