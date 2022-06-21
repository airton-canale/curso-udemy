import React from "react";


const Botoes = ({setInc, setDec}) => {

  return(
    <div>
       <button onClick={setInc}>+</button>
        <button onClick={setDec}>-</button>
    </div>
  )
}

export default Botoes