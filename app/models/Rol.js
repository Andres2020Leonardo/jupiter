const { json } = require('body-parser')
const con = require('../database/conexion')
Rol = {}

Rol.createRol=(req,res)=>{
    try {
        var result = con.query(
          'SELECT * FROM roles',
          [req.documento, req.password],
          function(err, rows, fields)  {

            res.json();
          }
        )  
      } catch (error) {
        res.json('error en la base de datos')
      }        
}

Rol.all=(req,res)=>{
  
  try {
    var result = con.query(
      'SELECT * FROM Rols',
      [req.documento, req.password],
      function(err, rows, fields)  {

        res.json(rows);
    
      }
    )  
   
  } catch (error) {
    res.json('error en la base de datos')
  }
    
          
}



module.exports = Rol;