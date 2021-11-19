const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');


app.use('/api/', require('../routes/route.usuario'));

app.use(morgan('start'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


app.set('Port',1075);
app.use(bodyparser.urlencoded({extends:true}));
app.use(bodyparser.json());



app.listen(app.get('Port'),()=>{
  console.log('Servido activo: ',app.get('Port'))
})