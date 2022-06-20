import React from "react";

const IndiretaFilho = ({aoClicar}) => {
const min = 50
const max = 70
const gerarIdade = () => parseInt(Math.random() * (max-min)) + min
const gerarNerd = () => Math.random() > 0.5

  return (
    <div>
        <div> Filho </div>
        <button onClick= {e => aoClicar ("Joao", gerarIdade(), gerarNerd())}>
            Fornecer Informacoes
        </button> 
    </div>
  )  
}
export default IndiretaFilho