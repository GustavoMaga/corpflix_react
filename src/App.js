//import da aplicação React literalmente
import React from 'react';

//import dos components para pagina
import Menu from './components/Menu/'
import Footer from './components/Footer/'
import BannerMain from './components/BannerMain/'

//import dos dados que tem que subir na pagina
import dadosIniciais from './data/dados_iniciais.json'

//função da aplicação
function App() {
  // a função retorna um JSX
  return (
    <div>
      <Menu></Menu>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-End? Como começar na área?"}
      >
      </BannerMain>  
      <Footer></Footer>
    </div>
  );
}

export default App;
