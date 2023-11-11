import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Formulario.css"

function Formulario({ setAlertMessage }) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    contrasena: "",
    confirmarContrasena: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let message = "";
    let color = "";

    if (!formData.nombre.trim() || !formData.email.trim() ||
        !formData.contrasena.trim() || !formData.confirmarContrasena.trim()) {
      message = "Revisa que has completado todos los campos.";
      color = "primary";
    } 
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      message = "Corrige el formato de tu correo electrónico!";
      color = "warning";
    }
    else if (formData.contrasena !== formData.confirmarContrasena) {
      message = "Al parecer las contraseñas no coinciden.";
      color = "warning";
    }
    else {
      message = "Haz enviado el formulario con éxito :D";
      color = "success";
    }

    setAlertMessage({ text: message, color: color });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control 
          type="text" 
          name="nombre" 
          placeholder="Introduce tu nombre" 
          onChange={handleChange} 
          value={formData.nombre}
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="email" 
          name="email" 
          placeholder="Introduce tu email" 
          onChange={handleChange} 
          value={formData.email}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control 
          type="password" 
          name="contrasena" 
          placeholder="Crea una contraseña" 
          onChange={handleChange} 
          value={formData.contrasena}
        />
      </Form.Group>

      <Form.Group controlId="formBasicConfirmPassword">
        <Form.Label>Confirmar Contraseña</Form.Label>
        <Form.Control 
          type="password" 
          name="confirmarContrasena" 
          placeholder="Confirma tu contraseña" 
          onChange={handleChange} 
          value={formData.confirmarContrasena}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
  );
}

export default Formulario;
