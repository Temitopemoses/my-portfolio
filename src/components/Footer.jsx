import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <h5>Temitope Moses</h5>
            <p>Web Developer | Python Developer</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="social-icons d-flex justify-content-center justify-content-md-end">
              <a href="https://github.com/Temitopemoses" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/temitope-moses-pmoz/" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaLinkedin size={20} />
              </a>
              <a href="https://wa.me/08163874757" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; {new Date().getFullYear()} Temitope Moses. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;