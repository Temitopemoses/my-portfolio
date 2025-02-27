import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <Container 
      id="about" 
      fluid  // Makes the section full width like the Hero section
      className="py-5 text-light" 
      style={{ background: '#1a1a1a' }}
    >
      <Row className="align-items-center justify-content-center w-75 mx-auto"> 
        <Col md={6} data-aos="fade-right">
          <Image src="src\assets\MO_02397-removebg-preview.png" roundedCircle fluid />
        </Col>
        <Col md={6} data-aos="fade-left">
          <h2 className="fw-bold">About Me</h2>
          <p>
            I specialize in building scalable web applications using <strong>React</strong> for frontend and <strong>Python (Django/Flask)</strong> for backend.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
