var {Router} = require('express');
const route= Router();
const consultas = require('../controllers/controller.transacciones');
route.get('/',consultas.all);
route.post('/',consultas.create);
module.exports = route;