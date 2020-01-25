const {Router } = require('express');
const routes = Router();
const NotaDeCorteController = require('./controllers/NotaDeCorteController');
const CursoController = require('./controllers/CursoController');



routes.post('/notadecorte', NotaDeCorteController.store);
routes.get('/curso', CursoController.index);



module.exports = routes;