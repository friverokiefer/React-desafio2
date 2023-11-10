import React from 'react';
import SocialButton from '../SocialButton/SocialButton';
import Formulario from '../Formulario/Formulario';
import Alert from '../Alert/Alert';
import './Registro.css';

function Registro({ setAlertMessage, alertMessage }) {
  return (
    <div className="registro-container">
      <h2>Crea una cuenta</h2>
      <SocialButton icon="facebook" />
      <SocialButton icon="github" />
      <SocialButton icon="linkedin" />
      <Formulario setAlertMessage={setAlertMessage} />
      {alertMessage && <Alert message={alertMessage.text} color={alertMessage.color} />}
    </div>
  );
}

export default Registro;
