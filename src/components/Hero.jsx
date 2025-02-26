import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="hero text-center d-flex align-items-center" style={{ height: '100vh', background: '#121212', color: 'white' }}>
      <Container data-aos="fade-up">
        <h1 className="display-3 fw-bold">Hello, I'm a Web & Python Developer</h1>
        <p className="lead">I build modern and scalable web applications.</p>
        <div className="d-flex justify-content-center gap-3">
          <Button variant="warning" size="lg" href="#projects">View My Work</Button>
          <Button variant="outline-light" size="lg" href="/files/my-cv.pdf" download>Download CV</Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
