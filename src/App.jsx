import React from 'react';
import Navigation from './components/Navigation'; // Correctly import the Navigation component
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Technologies from './components/Technologies';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Navigation /> {/* Use the correct component name */}
      <Hero />
      <About />
      <Technologies />
      <Contact />
    </ErrorBoundary>
  );
};

export default App;
