import React from 'react'

//Importing the components used the page
import Menu from '../../Menu'
import Footer from '../../Footer'

//Importing the styled components
import styled from 'styled-components'

//style default the pages
const Main = styled.main`
    background-color: var(--black);
    color:var(--white);
    flex:1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right:5%;
`;

function PageDefault(props){

    return(
        <>
            <Menu/>
                <Main>
                    {props.children}
                </Main>
            <Footer/>
        </>
    );

}

export default PageDefault