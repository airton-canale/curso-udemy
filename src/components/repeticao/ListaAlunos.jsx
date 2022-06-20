import React from "react";
import alunos from "../../data/alunos"

const Notas = props => {

    const lis = alunos.map((aluno) =>{ 
        return (
            <li>
                {aluno.id}) {aluno.nome} -&gt; {aluno.nota} 
            </li>
        )
    })
    return (
        <div>
            <ul style= {{listStyle: "none"}}>{lis}
                {lis}
            </ul>
        </div>
    )
    }
export default Notas
