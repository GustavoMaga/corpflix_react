import React from 'react'

//Importing the components used the page
import Menu from '../../Menu'
import Footer from '../../Footer'

function PageDefault(props){

    return(
        <div>
            <Menu></Menu>
                {props.children}
            <Footer></Footer>
        </div>
    );

}

export default PageDefault