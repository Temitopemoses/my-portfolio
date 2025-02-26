import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const projects = [
  { title: 'Portfolio Website', desc: 'Built with React & Bootstrap', img: 'https://via.placeholder.com/400' },
  { title: 'E-commerce API', desc: 'Built with Django & REST framework', img: 'https://via.placeholder.com/400' },
];

const Projects = () => {
  return (
    <Container 
      id="projects" 
      fluid  // Makes the section full width like Hero
      className="py-5 text-light" 
      style={{ background: '#121212' }}
    >
      <h2 className="text-center fw-bold mb-4" data-aos="fade-up">Projects</h2>
      <Row className="justify-content-center w-75 mx-auto"> 
        {projects.map((project, index) => (
          <Col md={6} key={index} data-aos="zoom-in">
            <Card className="mb-3 bg-dark text-light">
              <Card.Img variant="top" src={project.img} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
