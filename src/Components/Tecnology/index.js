import ColorDetector from "color-thief-react";
import { useState } from "react";

import styles from "./index.module.scss";

const Tecnology = ({ tecnology, href }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <a
      style={{ width: "fit-content" }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      href={href}
    >
      <ColorDetector src={`/assets/tecnologies/${tecnology}.svg`} format="hex">
        {({ data }) => (
          <div
            style={{
              background: isHover ? `${data}7a` : "transparent",
            }}
            className={styles.tecnology}
          >
            <img
              src={`/assets/tecnologies/${tecnology}.svg`}
              alt={tecnology}
              width="80px"
              height="80px"
            />
            <h4 style={{ color: data }}>{tecnology.split("-").join(" ")}</h4>
          </div>
        )}
      </ColorDetector>
    </a>
  );
};
export default Tecnology;
