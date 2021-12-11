const { json } = require('body-parser')
const con = require('../database/conexion')
Producto = {}

Producto.createProducto=(req,res)=>{
    try {
        var result = con.query(
          'SELECT * FROM productos',
          [req.documento, req.password],
          function(err, rows, fields)  {
            
            res.json();
          }
        )  
      } catch (error) {
        res.json('error en la base de datos')
      }        
}

Producto.all=(req,res)=>{

  try {
    var result = con.query(
      'SELECT * FROM productos',
      [req.documento, req.password],
      function(err, rows, fields)  {
   
        res.json(rows);
     
      }
    )  
   
  } catch (error) {
    res.json('error en la base de datos')
  }
    
          
}



     


module.exports = Producto;