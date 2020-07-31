//import da aplicação React literalmente
import React from 'react'

//função para criação do menu da pagina
function ButtonLink(props){
    return (

        // botão para acesso a pagina de insert de videos
        <a href={props.href} className={props.className}>
            {props.children}
        </a>

    );
}

//exportando o componente criado
export default ButtonLink