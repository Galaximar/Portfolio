import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./index.module.scss";

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState();

  return (
    <div className={styles.accordeon}>
      <button className={styles.btn} onClick={() => setOpen(!open)}>
        {title}
        <KeyboardArrowDownIcon
          style={{
            fontSize: "26px",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      <div className={`${styles.content} ${open ? styles.open : styles.close}`}>
        {children}
      </div>
    </div>
  );
};
export default Accordion;
