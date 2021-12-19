const express = require('express');
const morgan = require('morgan');
const app = express();
const server = require('http');
server.createServer(app);
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 1075;
var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }
  
app.use(bodyParser.urlencoded({extends:true}));
app.use(bodyParser.json());
app.use('/login/',cors(corsOptions),morgan('dev'),require('./routes/routes.login'));
app.use('/products/',cors(corsOptions),morgan('dev'),require('./routes/routes.producto'));
app.use('/products/count/',cors(corsOptions),morgan('dev'),require('./routes/routes.productosCount'));
app.use('/usuario/',cors(corsOptions),morgan('dev'),require('./routes/routes.usuario'));
app.use('/usuario/count/',cors(corsOptions),morgan('dev'),require('./routes/routes.usuarioCount'));
app.use('/movi/',cors(corsOptions),morgan('dev'),require('./routes/routes.transacciones'));
app.use('/movi/count/',cors(corsOptions),morgan('dev'),require('./routes/routes.transaccionesCount'));
app.use('/rol/',cors(corsOptions),morgan('dev'),require('./routes/routes.transacciones'));
app.listen(port,()=>{
    console.log('Servidor activo:',port)
})


