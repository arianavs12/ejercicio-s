import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, InputGroup } from 'react-bootstrap';

const FormularioComponent = ({ onNumeroChange }) => {
  const [numero, setNumero] = useState(null);

  const handleChange = (event) => {
    setNumero(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNumeroChange(Number(numero));
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <InputGroup className="mb-3">
        <InputGroup.Text className="mr-3">Ingresa el número n:</InputGroup.Text>
        <Form.Control
          type="number"
          aria-label="With textarea"
          value={numero}
          onChange={handleChange}
          className="mr-3"
        />
        <Button variant="info" type="submit" disabled={!numero}>
          Calcular
        </Button>
      </InputGroup>
    </form>
  );
};

export default FormularioComponent;

