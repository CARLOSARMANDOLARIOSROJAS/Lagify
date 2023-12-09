const express = require('express'); //Correct
const app = express(); //Correct
const UsuarioController = require('../src/controllers/UsuarioControlador');
const HistorialControlador = require('../src/controllers/HistorialControlador');

const puerto = 80;

app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Funcionando Correctamente - Lagify');
});

app.get('/usuario', UsuarioController.indexGet);
app.get('/usuario/:id([0-9]+)', UsuarioController.itemGet);
app.post('/usuario', UsuarioController.indexPost);
app.delete('/usuario/:id([0-9]+)', UsuarioController.itemDelete);

app.get('/historial', HistorialControlador.indexGet);
app.get('/historial/:id([0-9]+)', HistorialControlador.itemGet);
app.post('/historial', HistorialControlador.indexPost);
app.delete('/historial/:id([0-9]+)', HistorialControlador.itemDelete);


app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});