import "./TabelaProdutos.css";
import React from "react";
import produtos from "../../data/produtos";

const Produtos = (props) => {
  function getLinhas() {
    return produtos.map((produto, i) => {
      return (
        <tr key={produto.id} className={i % 2 === 0 ? "Par" : "Impar"}>
          <td>{produto.id}</td>
          <td>{produto.nome_produto}</td>
          <td>R${produto.preco_produto.toFixed(2).replace(".", ",")}</td>
        </tr>
      );
    });
  }

  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preco</th>
          </tr>
        </thead>
        <tbody>{getLinhas()}</tbody>
      </table>
    </div>
  );
};

//    const Produtos = props => {
// const tabela = produtos.map ((produtos) =>{
//     return (
//         <li>
//             {produtos.id}) {produtos.nome_produto} -&gt; {produtos.preco_produto}
//         </li>
//     )
// })
// return (
//     <div>
//         <ul style= {{listStyle: "none"}}>{tabela}
//             {tabela}
//         </ul>
//     </div>
// )
// }
export default Produtos;
