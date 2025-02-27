import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter'; // Import Typewriter
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/custom.css'; // Import custom CSS

const Hero = () => {
  return (
    <div className="hero text-center d-flex align-items-center" style={{ height: '100vh', background: '#121212', color: 'white' }}>
      <Container className="hero-content" data-aos="fade-up">
        <h1 className="display-3 fw-bold hero-title" data-aos="fade-up" data-aos-delay="200">
          My name is Temitope Moses <FontAwesomeIcon icon={faCheckCircle} className="verified-icon" />
        </h1>
        <div className="lead" data-aos="fade-up" data-aos-delay="400">
          <Typewriter
            words={[
              "I'm a Web Developer",
              "I'm a Python Developer",
              "I'm a Frontend Developer",
              "I'm a Backend Developer"
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={40}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <div className="d-flex justify-content-center gap-3" data-aos="fade-up" data-aos-delay="600">
          <Button variant="outline-light" size="lg" href="/files/OGUNBAMERU MOSES.pdf" download>Download CV</Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
