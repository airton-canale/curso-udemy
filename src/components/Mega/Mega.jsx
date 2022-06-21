import React from "react";
import { useState } from "react";


const generateNumbers = (qtt) => {
  const numeros = [];
  while (numeros.length < qtt) {
    const generated = Math.floor(Math.random() * (50 - 10 + 1) + 10);
    if (!numeros.includes(generated)) numeros.push(generated);
  }

  return numeros;
};

const Mega = () => {
  const [numeros, setNumeros] = useState([]);

  console.log(numeros);

  const setarInfo = () => {
    const numerosGerados = generateNumbers(6)
    setNumeros(numerosGerados);
  }

  const num = numeros.map((numero) => {
    return <h1>{numero}</h1>;
  });

  return (
    <div>
      {num}
      <button onClick={setarInfo}>Sortear Numeros</button>
    </div>
  );
};


export default Mega;
