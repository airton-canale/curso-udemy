import React from "react";
import "./App.css";

import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import Primeiro from "./components/basicos/Primeiro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aletorio from "./components/basicos/Aleatorio";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from "./components/layout/Card";
import ParOuImpar from "./components/repeticao/condicional/ParOuImpar";
import UsuarioInfo from "./components/repeticao/condicional/UsuarioInfo";
import DiretaPai from "./components/basicos/comunicacao/DiretaPai";
import IndiretaPai from "./components/basicos/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";


export default function App() {
  return (
    <div>
      <h1>Fundamentos React</h1>
      <div className="Cards">

      <Card titulo="#12 Contador" color= "#FFD940" >
         <Contador numeroInicial={10}/>
         
        </Card>
      <Card titulo="#11 Componente Controlado (Input)" color= "#123548" >
         <Input/>
         
        </Card>

      <Card titulo="#10 Comunicacao Indireta" color= "#853699" >
         <IndiretaPai/>
         
        </Card>
      <Card titulo="#9 Comunicacao Direta" color= "#810101" >
         <DiretaPai/>
         
        </Card>
        
      <Card titulo="#8 Renderizacao Condicional" color= "#424242" >
         <ParOuImpar numero = {205}/>
         <UsuarioInfo usuario= {{nome:"Fernando"}} />
         <UsuarioInfo usuario= {{nome:"Fernan"}} />
         <UsuarioInfo usuario= {{email:"airtinho@hotmail.com"}} />
      
        </Card>
      <Card titulo="#7 Desafio Repeticao" color= "#830653" >
          <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo="#6 Repeticao" color= "#FF4C65">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#5 Componente com Filhos" color="#00C8F8">
          <Familia sobrenome="Ferreira">
            <FamiliaMembro nome="Pedro"/>
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo" />
          </Familia>
        </Card>
    
        <Card titulo="#1 Desafio Aleatorio" color="green">
          <Aletorio max={100} min={1} />
        </Card>

        <Card titulo="#2 Erro" color="#B600FF">
          <Fragmento />
        </Card>

        <Card titulo="#3 Notas" color="#040086">
          <ComParametro
            titulo="Situacao do Aluno"
            aluno="Pedro Silva"
            nota={9.3}
          />
        </Card>
        <Card titulo="#4 Boas Vindas" color="#DAF7A6">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
}
