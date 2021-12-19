const user  = require('../models/Usuario');
const consultas  = {};
consultas.login = user.login;
consultas.all = user.all;
consultas.createUsuario = user.createUsuario;
consultas.deleteUsuario = user.deleteUsuario;
consultas.updateUsuario = user.updateUsuario;
consultas.count = user.count;
module.exports = consultas;