import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Navigation = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#">Temitope Moses</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href='#technologies'>Technologies</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <div className="social-icons ms-3">
            <a href="https://github.com/Temitopemoses" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} className="text-light mx-2" />
            </a>
            <a href="https://www.linkedin.com/in/temitope-moses-pmoz/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} className="text-light mx-2" />
            </a>
            <a href="https://wa.me/08163874757" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={20} className="text-light mx-2" />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
