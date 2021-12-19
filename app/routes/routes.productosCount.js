var {Router} = require('express');
const route= Router();
const consultas = require('../controllers/controller.producto');
route.get('/',consultas.count);


module.exports = route;