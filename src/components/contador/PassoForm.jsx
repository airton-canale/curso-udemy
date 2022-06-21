import React from "react";

const Passo = ({passo, setPasso}) => {
  return (
    <div>
        <label htmlFor="passoInput"> Passo: </label>
        <input
          id="passoInput"
          type="number"
          value={passo}
          onChange={e => setPasso(+e.target.value)}
      />
    </div>
  );
};

export default Passo;
