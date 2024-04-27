import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <div className="container text-center my-5">
      <div className="d-flex flex-column mb-5">
        <div className="display-6 mb-3">Cuentanos, ¿En qué te podemos ayudar?</div>
      </div>
      <Container fluid="xl">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Correo:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="danger" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default Contact;