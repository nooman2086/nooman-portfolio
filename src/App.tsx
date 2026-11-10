import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Career from './components/Career';
import Competencies from './components/Competencies';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import CaseStudies from './components/CaseStudies';
import ReferenceWork from './components/ReferenceWork';
import Roadmap from './components/Roadmap';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <div id="top" className="mx-auto max-w-5xl px-5">
          <Hero />
          <Profile />
          <Career />
          <Competencies />
          <ArchitectureDiagram />
          <CaseStudies />
          <ReferenceWork />
          <Roadmap />
          <Credentials />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
