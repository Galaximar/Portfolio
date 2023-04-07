import Body from "./Body";
import ScrollTo from "./ScrollTo";
import i18 from "../languages";
import { useLocation } from "react-router-dom";

const validLanguages = { es: "es", en: "en" };

export default function Home() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let lang = searchParams.get("lang") || "en";
  lang = validLanguages[lang] || "en";
  const { t } = i18(lang);
  return (
    <>
      <div>
        <Body lang={lang} t={t} />
        <ScrollTo t={t} />
      </div>
    </>
  );
}
