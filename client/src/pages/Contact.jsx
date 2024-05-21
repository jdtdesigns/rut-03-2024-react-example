import { Button, Form, Container } from 'react-bootstrap'

function Contact() {
  return (
    <Container>
      <h1 className="text-center mb-4 mt-3">Contact Me</h1>

      <Form action="https://api.web3forms.com/submit" method="POST" className="mx-auto" style={{ width: '450px' }}>
        <input type="hidden" name="access_key" value="45ea0a30-6748-4a2f-b94b-e69469fa4e0b" />
        <input type="hidden" name="subject" value="New Message From User" />

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Enter Your Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Type Your Message</Form.Label>
          <Form.Control name="message" as="textarea" placeholder="Enter your message" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Contact