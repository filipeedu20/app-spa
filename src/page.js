import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Inicio() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>         
          <li>
            <Link to="/users">Usuários</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/users" component={Users} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Página inicial</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>Sobre</h2>
    </div>
  );
}


// lista pagina de usuários
function Users({ match }){
  return (
    <>
    <div class="panel panel-default">
      <div class="panel-heading">Panel heading</div>
          <div class="panel-body">            
          </div>        
          <table border='1' collspan='0'>                        
              <tr>
                  <td>Nome</td>
                  <td>E-mail</td>
                  <td>Idade</td>
                  <td>Exibir</td>
                  <td>Ações</td>
              </tr>
              <tr>
                  <td>João</td>
                  <td>joao@email.com </td>
                  <td>30</td>
                  <td>
                    <Link to={`${match.url}/João`}>visualizar</Link>
                  </td>
                  <td><button>remover</button></td>
              </tr> 
              <tr>
                  <td>Alice</td>
                  <td>alice@email.com </td>
                  <td>29</td>
                  <td>                    
                      <Link to={`${match.url}/Alice`}>visualizar</Link>
                  </td>
                  <td><button>remover</button></td>
              </tr> 
              <tr>
                  <td>Pedro</td>
                  <td>pedro@email.com </td>
                  <td>20</td>     
                  <td>                    
                      <Link to={`${match.url}/Pedro`}>visualizar</Link>
                  </td>
                  <td><button>remover</button></td>               
              </tr>                                       
          </table>          
      </div>
        <Route exact path={`${match.path}/:name`} component={UserItem} />
        <Route exact path={match.path} />
  </>
  );
}
function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

function UserItem({ match }) {
  return (
    <div>
      <h3>{match.params.name}</h3>
    </div>
  );
}
export default Inicio;
