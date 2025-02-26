import About from "./components/About";
import Hero from "./components/Hero";
import Navigation from "./components/navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Technologies from './components/Technologies'

const App = () => {
  return (
    <>
      <Navigation/>
      <Hero/>
      <About/>
      <Projects/>
      <Technologies/>
      <Contact/>
    </>
  );
};

export default App;
