import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Achievements from './components/Achievements.jsx';
import Projects from './components/Projects.jsx';
import Designs from './components/Designs.jsx';
import Experience from './components/Experience.jsx';
import Leadership from './components/Leadership.jsx';
import Education from './components/Education.jsx';
import Certifications from './components/Certifications.jsx';
import Interests from './components/Interests.jsx';
import GrowingIn from './components/GrowingIn.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import useScrollReveal from './hooks/useScrollReveal.js';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useScrollReveal();

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Projects />
        <Designs />
        <Experience />
        <Leadership />
        <Education />
        <Certifications />
        <Interests />
        <GrowingIn />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}