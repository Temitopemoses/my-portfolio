import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

AOS.init();

const About = () => {
  return (
    <Container 
      id="about" 
      fluid  // Makes the section full width like the Hero section
      className="py-5 text-light" 
      style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)' }}
    >
      <Row className="align-items-center justify-content-center w-75 mx-auto"> 
        <Col md={6} data-aos="fade-right">
          <div className="image-container">
            <Image src="public\files\assets\MO_02397.jpg" roundedCircle fluid className="about-image" />
          </div>
        </Col>
        <Col md={6} data-aos="fade-left">
          <h2 className="fw-bold">About Me</h2>
          <p>
            I am a front-end developer with over three years of experience in building seamless and interactive web applications. My expertise lies in web development and API integration, and I am currently expanding my skills into backend development using Django and Flask. Passionate about creating efficient and scalable digital solutions, I work with IUSystems to develop tech-based solutions for businesses and educational institutions, helping them leverage technology for improved efficiency and growth.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;