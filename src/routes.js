const {Router } = require('express');
const routes = Router();
const NotaDeCorteController = require('./controllers/NotaDeCorteController');



routes.post('/notadecorte', NotaDeCorteController.store);


module.exports = routes;