//import da aplicação React literalmente
import React from 'react';

//import dos components para pagina
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'

//import dos dados que tem que subir na pagina
import dadosIniciais from '../../data/dados_iniciais.json'

//função da aplicação
function Home() {
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
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      ></Carousel>
      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />       
      <Footer></Footer>
    </div>
  );
}

export default Home;
