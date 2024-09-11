import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import SocialProof from './components/SocialProof/SocialProof';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <SocialProof />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;