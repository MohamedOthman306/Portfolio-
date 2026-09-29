import { lazy, Suspense, useEffect } from 'react';
import Navigation from './components/navigation/Navigation';
import Hero from './sections/Hero';
import { initScrollReveal } from './utils/scrollReveal';

const About = lazy(() => import('./sections/About'));
const Process = lazy(() => import('./sections/Process'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Experience = lazy(() => import('./sections/Experience'));
const Contact = lazy(() => import('./sections/Contact'));

export default function App() {
  useEffect(() => {
    const cleanup = initScrollReveal();
    return cleanup;
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Process />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </main>
    </>
  );
}
