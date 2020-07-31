//import da aplicação React literalmente
import React from 'react'

//import para aplicação no Menu da pagina
import Logo from '../../assets/image/Logo.png'
import './Menu.css'

//import ButtonLink from '../ButtonLink'; -->  Utilizando CSS normalmente
import Button from '../Button' // --> Utilizando STYLED-COMPONENTS

//Importing to routing the pages
import { Link } from 'react-router-dom'

//função para criação do menu da pagina
function Menu(){
    return (
        //criação da NavBar da pagina
        <nav className="Menu">
            {/* importando o logo para o NavBar */}
            {/* O Link tem como função fazer o roteamento entre pages tirando a necessidade de reload e assim se tronando uma SPA literalmente */}
            <Link to="/">
                <img className="Logo" src={Logo} alt="CLARAFLIX LOGO."/>
            </Link>
            {/* botão para acesso a pagina de insert de videos - lembrando que o 'as' é para mudar o comportamento do componente fazendo com que se comporte como outro */}
            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo Video
            </Button>
        </nav>
    );
}

//exportando o componente criado
export default Menu