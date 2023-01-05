import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const ContactForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Dirección</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su dirección" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su número de teléfono" />
      </Form.Group>


      <Button
        variant="primary"
        onClick={() => {
          getOrder();
        }}
      >
        Generar Orden
      </Button>
    </Form>
  )
}

export default ContactForm
