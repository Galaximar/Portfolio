import About from "./About";
import Footer from "./Footer";
import Tecnologies from "./Tecnologies";
import Projects from "./Projects";
import LanguageSelector from "./LanguageSelector";

export default function Body({ t, lang }) {
  return (
    <div>
      <LanguageSelector lang={lang} />
      <div>
        <About t={t} />
      </div>
      <div>
        <Projects t={t} />
      </div>
      <div>
        <Tecnologies t={t} />
      </div>
      <div>
        <Footer t={t} />
      </div>
    </div>
  );
}
