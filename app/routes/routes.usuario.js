var {Router} = require('express');
const route= Router();
const consultas = require('../controllers/controller.usuario');
route.get('/',consultas.all);
route.post('/',consultas.createUsuario);
route.delete('/', consultas.deleteUsuario);
route.put('/', consultas.updateUsuario);
module.exports = route;