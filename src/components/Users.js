import React from "react";
// import Users from "./components";
import { BrowserRouter as  Route, Link } from "react-router-dom";
export const Users = ({match}) => (
<>

<div class="panel panel-default">
    <div class="panel-heading">Panel heading</div>
        <div class="panel-body">            
        </div>        
        <table border='1'>                        
            <tr>
                <td>Nome</td>
                <td>E-mail</td>
                <td>Idade</td>
                <td></td>
            </tr>
            <tr>
                <td>João</td>
                <td>joao@email.com </td>
                <td>30</td>
                <td>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                    {/* <Link to={`${match.url}/Alice`}>visualizar</Link> */}
                </td>
            </tr> 
            <tr>
                <td>Alice</td>
                <td>alice@email.com </td>
                <td>29</td>
                <td>                    
                    <Link to={`${match.url}/Alice`}>visualizar</Link>
                </td>
            </tr> 
            <tr>
                <td>Pedro</td>
                <td>pedro@email.com </td>
                <td>20</td>                    
                </tr>                                            
        </table>          
    </div>
   <Route path={`${match.path}/:name`} component={UserItem} />
      <Route
        exact
        path={match.path}
        render={() => <h1>Please select a topic.</h1>}
      />
</>
);


export const UserItem = ({match}) => (    
    <>
        <h2>{match.params.name}</h2>
    </>
);    

