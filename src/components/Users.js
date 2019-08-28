import React from "react";
// import Users from "./components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export const Users = (match) => (
<>
{/* 
    REFERENCIAS:
    - https://codesandbox.io/s/react-router-example-5xos8
    - https://reacttraining.com/react-router/web/guides/quick-start 

*/}
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
                    <Link to={`${match.url}/João`}>visualizar</Link>
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
                    <Link to={`${match.url}/Pedro`}>visualizar</Link>
                </tr>                                            
        </table>
</div>
</>
);