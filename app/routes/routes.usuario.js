var {Router} = require('express');
const route= Router();
const consultas = require('../controllers/controller.usuario');
route.get('/',consultas.all);

module.exports = route;