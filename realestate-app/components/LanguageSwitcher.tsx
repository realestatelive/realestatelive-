import { useState } from "react";
import styles from "@/styles/LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const [lang, setLang] = useState("ar");

  const switchLang = (l: string) => {
    setLang(l);
    if (typeof document !== "undefined") {
      document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = l;
    }
  };

  return (
    <div className={styles.langSwitcher}>
      <button
        className={lang === "ar" ? styles.active : ""}
        onClick={() => switchLang("ar")}
        type="button"
      >
        العربية
      </button>
      <button
        className={lang === "en" ? styles.active : ""}
        onClick={() => switchLang("en")}
        type="button"
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;
