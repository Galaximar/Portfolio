import LanguageIcon from "@mui/icons-material/Language";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const LanguageSelector = ({ lang }) => {
  const [left, setLeft] = useState(lang === "es");
  const navigate = useNavigate();

  function changeLanguage(language) {
    navigate(`/?lang=${language}`);
  }
  return (
    <div className={styles.languageSelector}>
      <button
        onClick={() => {
          setLeft(true);
          changeLanguage("es");
        }}
        className={styles.btnLeft}
      >
        Es
      </button>
      <div className={styles.selector}>
        <LanguageIcon
          sx={{ color: "black" }}
          className={left ? styles.left : styles.right}
        />
      </div>
      <button
        onClick={() => {
          setLeft(false);
          changeLanguage("en");
        }}
        className={styles.btnRight}
      >
        En
      </button>
    </div>
  );
};

export default LanguageSelector;
