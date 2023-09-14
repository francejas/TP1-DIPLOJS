"use client"
import React, { useState } from 'react';

function Counter() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}

export default Counter;