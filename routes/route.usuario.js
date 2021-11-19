var {Router} = require('express');
const route= Router();
const user = require('../controllers/controller.usuario')
route.get('/',user.all);

module.exports = route;