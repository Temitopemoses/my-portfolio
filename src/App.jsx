import About from "./components/About";
import Hero from "./components/Hero";
import Navigation from "./components/navbar";
import Contact from "./components/Contact";
import Technologies from './components/Technologies'

const App = () => {
  return (
    <>
      <Navigation/>
      <Hero/>
      <About/>
      <Technologies/>
      <Contact/>
    </>
  );
};

export default App;
