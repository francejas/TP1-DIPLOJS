"use client"
import React, { useRef, useState } from 'react';

const PaginaContacto = () => {
  const nombreRef = useRef(null);
  const correoRef = useRef(null);
  const mensajeRef = useRef(null);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = nombreRef.current.value;
    const correo = correoRef.current.value;
    const mensaje = mensajeRef.current.value;

    // Validación de campos vacíos, devuelve true si estan vacios, el operador ! comprueba si el campo de nombre está vacío.(falsy)
    if (!nombre || !correo || !mensaje) {
      setError(true);
      //aca se puede ver en consola que valores toman
      console.log('nombre', !nombre);
      console.log('correo',!correo);
      console.log('mensaje',!mensaje);
      return;
    }

    // aca se pueden realizar acciones con los datos
    
    console.log('Nombre:', nombre);
    console.log('Correo:', correo);
    console.log('Mensaje:', mensaje);

    // Marcar como enviado y mostrar mensaje de éxito
    setEnviado(true);
    setError(false); // Limpiar el mensaje de error
  };

  return (
    <div>
      <h1>Esta es la página de contacto</h1>
      <p>Información de contacto:</p>
      <ul>
        <li>Email: contacto@ejemplo.com</li>
        <li>Teléfono: 123-456-7890</li>
        <li>Instagram: www.instagram.com/pepito908/</li>
      </ul>
      <h2>Formulario de Contacto</h2>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" ref={nombreRef} />
        </div>
        <div>
          <label htmlFor="correo">Correo Electrónico:</label>
          <input type="email" id="correo" ref={correoRef} />
        </div>
        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" rows="4" ref={mensajeRef}></textarea>
        </div>
        <button type="submit">Enviar</button>
      {enviado && <p>Mensaje enviado con éxito.</p>}
      {error && <p>Todos los campos son obligatorios.</p>}  
        
      </form>
    </div>
  );
};

export default PaginaContacto;
