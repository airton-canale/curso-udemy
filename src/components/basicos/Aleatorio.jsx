import React from "react";

export default function Aleatorio({min, max}) {
  const numero = Math.floor(
    Math.random() * (max - min + 1) + min
  );
  return (
    <div>
      <h2>Numero Aleatorio</h2>
      <p>
        <strong> Valor Minimo: {min} </strong>
      </p>
      <p>
        <strong> Valor Maximo: {max} </strong>
      </p>
      <p>
        <strong> Valor Aleatorio: {numero} </strong>
      </p>
    </div>
  );
}
