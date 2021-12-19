var {Router} = require('express');
const route= Router();
const consultas = require('../controllers/controller.transacciones');
route.get('/',consultas.count);
route.post('/',consultas.saldo);
module.exports = route;