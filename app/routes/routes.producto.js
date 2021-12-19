var {Router} = require('express');
const route= Router();
const consultas = require('../controllers/controller.producto');
route.get('/',consultas.all);
route.post('/',consultas.createProducto);
route.delete('/',consultas.deleteProducto);
route.put('/',consultas.updateProducto);
module.exports = route;