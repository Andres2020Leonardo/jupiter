const user  = require('../models/Usuario');
const consultas  = {};
consultas.login = user.login;
consultas.all = user.all;


module.exports = consultas;