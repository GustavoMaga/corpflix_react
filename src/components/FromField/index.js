import React from 'react'

function FromField({value}){
    return (
        <div>
            <label>
                Nome da Categoria:

                {/* Lembrando que o Input tem as mesmas funcionalidades do que no React-Native -  Muda poucas coisas - mesma forma de usar o State*/}
                <input
                    type='text'
                    value={value
                    }
                    name='name'
                    onChange={}
                    />

            </label>
      </div>
    );
}

export default FromField