import React from 'react'

//Importing the components which pages will used
import PageDefault from '../../../components/template/Base'

//Importing function to routing the page
import { Link } from 'react-router-dom'

function CadastroVideo (){
    return(
        <PageDefault>

            <h1>Cadastro de Video</h1>

            <Link to='/cadastro/categorias'>
                Cadastrar nova categoria 
            </Link>

        </PageDefault>
    )
}

export default CadastroVideo