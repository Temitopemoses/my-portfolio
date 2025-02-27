import React from 'react';
import Navigation from './components/Navigation'; // Correctly import the Navigation component
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Technologies from './components/Technologies';
import Footer from './components/Footer'; // Import the Footer component
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Navigation /> 
      <Hero />
      <About />
      <Technologies />
      <Contact />
      <Footer /> 
    </ErrorBoundary>
  );
};

export default App;
