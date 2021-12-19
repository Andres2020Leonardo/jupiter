const transacciones = require('../models/Transacciones');
const consultas = {};
consultas.count = transacciones.count;
consultas.all = transacciones.all;
consultas.create = transacciones.createTransacciones
consultas.saldo = transacciones.saldo
module.exports = consultas;