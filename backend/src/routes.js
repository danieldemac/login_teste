const express = require('express');

const routes = express.Router();
const users = [{
    id:1,
    name:'Daniel Cabral',
    email:'contato@gmail.com',
    password:'12345'

},
{
    id:2,
    name:'Miza Boy',
    email:'contato2@gmail.com',
    password:'12345'

},
{
    id:3,
    name:'Galeguinho',
    email:'contato3@gmail.com',
    password:'12345'

}];

routes.post('/login', (req, res) => {
    const {email, password} = req.body;

    const user = users.find(user => user.email === email && user.password === password);
    if(user)
    {
        return res.status(200).json(user);
    }

    return res.status(401).json({ menssage: 'Credenciais inválidas'});
});

module.exports = routes;