import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6002nat', 'template_c05nemf', form.current, 'PFCXjdX2Eb9Cp6Gri')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <Container 
      id="contact" 
      fluid  // This makes it full width like the Hero section
      className="py-5 text-light d-flex flex-column align-items-center" 
      style={{ background: '#1a1a1a' }}
    >
      <h2 className="text-center fw-bold" data-aos="fade-up">Contact Me</h2>
      <Form 
        ref={form}
        onSubmit={sendEmail}
        className="w-75" // Adjust width to match Hero section
        data-aos="fade-up"
      >
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" name="user_name" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" name="user_email" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Write your message" name="message" required />
        </Form.Group>
        <Button variant="warning" type="submit">Send</Button>
      </Form>
    </Container>
  );
};

export default Contact;
