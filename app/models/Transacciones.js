const { json } = require('body-parser')
const con = require('../database/conexion')
Transacciones = {}

Transacciones.createTransacciones=(req,res)=>{

     res.send(req.body)
}

Transacciones.all=(req,res)=>{

  try {
    var result = con.query(
      'SELECT * FROM transacciones',
      [req.documento, req.password],
      function(err, rows, fields)  {
        
        res.json(rows);
      }
    )  
  } catch (error) {
    res.json('error en la base de datos')
  }
    
          
}


    

     


module.exports = Transacciones;