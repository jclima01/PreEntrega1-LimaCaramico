import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useCartContext } from "../../context/CartContext";

const ContactForm = () => {

const {handleInputValue,handleInputSubmit} = useCartContext()
return (
  <>
    <Form onSubmit={(e) => handleInputSubmit(e)} className="col-8 d-block p-3">
      <h2>CheckOut</h2>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nombre</Form.Label>
        <Form.Control name='name' onChange={(e) => handleInputValue(e)} type="text" placeholder="Ingrese su nombre" required  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' onChange={e => handleInputValue(e)} type="email" placeholder="Enter email" required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Dirección</Form.Label>
        <Form.Control name='direction' onChange={e => handleInputValue(e)} type="text" placeholder="Ingrese su dirección" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control name='phone' onChange={e => handleInputValue(e)} type="text" placeholder="Ingrese su número de teléfono"  required/>
      </Form.Group>

      <Button
        variant="primary"
        
        type='submit'
      >
        Generar Orden
      </Button>
    </Form>
    </>
  );
};

export default ContactForm;
