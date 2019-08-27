import React from "react";
const contacts = [
    { id: 1, name: 'Jon Snow', email: 'winterishere@jonsnow.com'},
    { id: 2, name: 'Ygritte', email: 'youknownothing@jonsnow.com'},
  ];
export const Users = () => (
    
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
                    <a hrerf=''>visualizar</a>
                </td>
            </tr> 
            <tr>
                <td>Alice</td>
                <td>alice@email.com </td>
                <td>29</td>
                <td>
                    {/* <Link to="/users/:1">Users</Link> */}
                    <a hrerf=''>visualizar</a>
                </td>
            </tr> 
            <tr>
                <td>Pedro</td>
                <td>pedro@email.com </td>
                <td>20</td>
                <td><a hrerf='#'>visualizar</a></td>
            </tr>                                            
        </table>
</div>
</>
);