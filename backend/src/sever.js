const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/', (req, res) => {
    res.send('Servidor Backend Ativo!');
});

app.listen(3000, () => {
    console.log('Transmitindo na porta 3000');
});