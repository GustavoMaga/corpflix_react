import React, { useState } from 'react'

//Importing the components which pages will used
import PageDefault from '../../../components/template/Base'

//Importing function to routing the page
import { Link } from 'react-router-dom'
import FromField from '../../../components/FromField'

function CadastroCategoria (){
    
    //o useState funciona da mesma forma que no React-Native
    
    const jsonCategorias = {
      name: '',
      description: '',
      color:'#d11515'
    }

    const [categoria, setCategoria] = useState(jsonCategorias)
    const [categoriasOld, setCategoriasOld] = useState(['teste1', 'teste2'])

    //Function from insert the values in state
    function setValues(key, value){

      //Insert values
      setCategoria({
        ...categoria,
        [key]: value
      })

    }

    function handleChange (event) {
      setValues(
        event.target.getAttribute('name'), 
        event.target.value)
        console.log('NAME >>> ', event.target.getAttribute('name'), ' VALUE >>> ', event.target.value)
    }

    return(
        <PageDefault>

            <h1>Cadastro de Categoria: {categoria.name} </h1>
       
            <form onSubmit={function handleSubmit(sendFrom) {
              //O preventDeafalt tem como objetivo não fazer o reload da pagina quando é enviado o from
              sendFrom.preventDefault();

              //Colocando a nova categoria na lista
              setCategoriasOld([
                ...categoriasOld,
                categoria.name
              ])

              setCategoria(jsonCategorias)

            }}>
              
              <div>
                <FromField/>
                <label>
                  Descrição:

                  {/* Lembrando que o Input tem as mesmas funcionalidades do que no React-Native -  Muda poucas coisas - mesma forma de usar o State*/}
                  <textarea
                    type='text'                    
                    value={categoria.description}
                    name='description'
                    onChange={handleChange}
                  />

                </label>
                <label>
                  Cor:

                  {/* Lembrando que o Input tem as mesmas funcionalidades do que no React-Native -  Muda poucas coisas - mesma forma de usar o State*/}
                  <input
                    type='color'
                    value={categoria.color}
                    name='color'
                    onChange={handleChange}
                  />

                </label>
              </div>

            <button>
              Cadastrar
            </button>
            </form> 
            
            {/* Utilizando o Map para rendrizar a lista de categorias criadas. */}
            <ul>
              {categoriasOld.map((categoriasOld,index)=>{
                return(
                  <li key={index}>
                    {categoriasOld}
                  </li>
                );
              })}
            </ul>

            <Link to='/'>
                Voltar para Home
            </Link>

        </PageDefault>
    )
}

export default CadastroCategoria