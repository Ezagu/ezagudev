import { Header } from "./components/Header/Header.js";
import { Home } from "./pages/Home/Home.js";
import { Projects } from "./pages/Projects/Projects.js";
import { Skills } from "./pages/Skills/Skills.js";
import { Contact } from "./pages/Contact/Contact.js";
import { Footer } from "./components/Footer/Footer.js";

const App = () => {
  return (
    <>
      <Header />

      <section className="pages">
        <article className="page">
          <Home />
        </article>
        <article className="page">
          <Projects />
        </article>
        <article className="page">
          <Skills />
        </article>
        <article className="page">
          <Contact />
        </article>
      </section>

      <Footer />
    </>
  );
};

export default App;
