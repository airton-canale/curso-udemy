import React from "react";
import If, { Else } from "./lf"

const Usuario = ({usuario}) => {
    return (
        <div>
        
            <If test= {usuario && usuario.nome}> 
            Seja bem Vindo <strong> {usuario.nome}</strong> !
                <Else>  
                    Seja bem Vindo <strong> Amigao</strong> !
                </Else>
            </If> 
            
            
        </div>
    )
}
export default Usuario 