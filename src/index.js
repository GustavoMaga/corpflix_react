import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Importing the pages used the project
import App from './pages/Home';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategorias from './pages/cadastro/Categorias'

//Importing components to create project routes
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  //BrowserRouter => Has the function of routing between pages
  <BrowserRouter>
    {/* Switch => Has the function of analyzing which route is being used */}
    <Switch>
      {/* Route => Has the function of information which page is being used */}
      <Route  path="/" component={App} exact/>
      <Route  path="/cadastro/video" component={CadastroVideo} exact/>
      <Route  path="/cadastro/categorias" component={CadastroCategorias} exact/>
      {/* Route to error page 404 */}
      <Route component={() => (<div> Error page 404</div>)}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

