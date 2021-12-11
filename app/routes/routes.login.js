var {Router} = require('express');
const route= Router();
const login = require('../controllers/controller.usuario');
route.post('/',login.login);

module.exports = route;