const producto = require('../models/Producto');
const consultas = {};

consultas.all = producto.all;

module.exports = consultas;