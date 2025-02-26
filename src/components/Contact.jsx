import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container 
      id="contact" 
      fluid  // This makes it full width like the Hero section
      className="py-5 text-light d-flex flex-column align-items-center" 
      style={{ background: '#1a1a1a' }}
    >
      <h2 className="text-center fw-bold" data-aos="fade-up">Contact Me</h2>
      <Form 
        className="w-75" // Adjust width to match Hero section
        data-aos="fade-up"
      >
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Write your message" />
        </Form.Group>
        <Button variant="warning" type="submit">Send</Button>
      </Form>
    </Container>
  );
};

export default Contact;
