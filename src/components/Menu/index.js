//import da aplicação React literalmente
import React from 'react'

//import para aplicação no Menu da pagina
import Logo from '../../assets/image/Logo.png'
import './Menu.css'

//import ButtonLink from '../ButtonLink'; -->  Utilizando CSS normalmente
import Button from '../Button' // --> Utilizando STYLED-COMPONENTS

//função para criação do menu da pagina
function Menu(){
    return (
        //criação da NavBar da pagina
        <nav className="Menu">
            {/* importando o logo para o NavBar */}
            <a href="/">
                <img className="Logo" src={Logo} alt="CLARAFLIX LOGO."/>
            </a>
            {/* botão para acesso a pagina de insert de videos */}
            <Button as='a' href="/" className="ButtonLink">
                Novo Video
            </Button>
        </nav>
    );
}

//exportando o componente criado
export default Menu